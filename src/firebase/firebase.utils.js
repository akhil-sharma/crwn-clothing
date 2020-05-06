import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyASM1Xz_tt4OKiQ-3kt1b9ECag4UNFfFG4",
    authDomain: "crwn-clothing-cf188.firebaseapp.com",
    databaseURL: "https://crwn-clothing-cf188.firebaseio.com",
    projectId: "crwn-clothing-cf188",
    storageBucket: "crwn-clothing-cf188.appspot.com",
    messagingSenderId: "821197593940",
    appId: "1:821197593940:web:5166a4974e338fa25c7cc1",
    measurementId: "G-2HENKP9DKQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth){
        return
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
} 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => {auth.signInWithPopup(provider)};

export default firebase;
