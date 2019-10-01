import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { transform } from '@babel/core';

const config = {
    apiKey: "AIzaSyDJcJ82mrvdk0et-Ld_Cw-ZXAWGlM2xP_o",
    authDomain: "crwn-datab.firebaseapp.com",
    databaseURL: "https://crwn-datab.firebaseio.com",
    projectId: "crwn-datab",
    storageBucket: "",
    messagingSenderId: "761358635016",
    appId: "1:761358635016:web:3b35e32627add3b7"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();
   
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({ displayName, email, createdAt, ...additionalData})
      } catch (error ) {
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  };

    export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj)
    });

    return await batch.commit()
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items} = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

    console.log(transformedCollection)
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;