import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDJcJ82mrvdk0et-Ld_Cw-ZXAWGlM2xP_o",
    authDomain: "crwn-datab.firebaseapp.com",
    databaseURL: "https://crwn-datab.firebaseio.com",
    projectId: "crwn-datab",
    storageBucket: "",
    messagingSenderId: "761358635016",
    appId: "1:761358635016:web:3b35e32627add3b7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;