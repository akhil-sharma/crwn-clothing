import { takeLatest, takeEvery, all, call, put } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { 
    auth, 
    googleProvider, 
    createUserProfileDocument,
    getCurrentUser 
} from '../../firebase/firebase.utils';

import { 
    signInSuccess, 
    signInFailure,
    signOutFailure,
    signOutSuccess,
    signUpSuccess,
    signUpFailure
 } from '../user/user.actions';

export function* getSnapshotFromUserAuth (userAuth, additionaData){
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionaData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle(){
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error){
        yield put(signInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    );
}

export function* signInWithEmail(emailAndPassword) {
    try {
        const { email, password } = emailAndPassword.payload;
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }

}

export function* onEmailSignInStart() {
    yield takeLatest (
        UserActionTypes.EMAIL_SIGN_IN_START,
        signInWithEmail
    );
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onCheckUserSession() {
    yield takeEvery(
        UserActionTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    );
}

export function* signOutUser() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* onSignOutStart(){
    yield takeLatest(
        UserActionTypes.SIGN_OUT_START,
        signOutUser
    );
}

export function* onSignUpUser({payload: {email, password, displayName}}){
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );
        yield put(signUpSuccess({user, additionaData: displayName}));
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* onSignUpStart() {
    yield takeLatest(
        UserActionTypes.SIGN_UP_START,
        onSignUpUser
    );
}

export function* signInAfterSignUp({payload: {user, additionaData}}){
    yield call(getSnapshotFromUserAuth, user, additionaData);
}

export function* onSignUpSuccess(){
    yield takeLatest(
        UserActionTypes.SIGN_UP_SUCCESS,
        signInAfterSignUp
    );
}

export default function* userSagas () {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}