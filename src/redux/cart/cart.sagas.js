import { takeLatest, all, call, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { clearCart } from '../cart/cart.actions';


export function* clearCartAfterSignOut(){
    yield put(clearCart());
}

export function* onSignOutSuccess(){
    yield takeLatest(
        UserActionTypes.SIGN_OUT_SUCCESS,
        clearCartAfterSignOut
    );
}

export default function* cartSagas(){
    yield all([
        call(onSignOutSuccess)
    ]);
}