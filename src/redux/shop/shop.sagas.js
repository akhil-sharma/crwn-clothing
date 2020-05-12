import { takeLatest, call, put } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

import { 
    firestore, 
    convertCollectionsSnapshotToMap 
} from '../../firebase/firebase.utils';

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from '../shop/shop.actions';

export function* fetchCollectionsStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync 
    );
}

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        //Using call just incase case the function takes longer than usual.
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        //put is used to dispatch an action in saga.
        yield put(fetchCollectionsSuccess(collectionsMap)); 
    }catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
}