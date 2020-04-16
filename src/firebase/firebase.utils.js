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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
