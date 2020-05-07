import UserActionTypes from './user.types';

// User SignIn Actions
export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

// User SignUp Actions
export const signUpStart = (accountDetails) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: accountDetails
});

export const signUpSuccess = ({user, additionaData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionaData}
});

export const signUpFailure= ( error ) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload : error
});

// Session Actions
export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});

// SignOut Actions
export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});