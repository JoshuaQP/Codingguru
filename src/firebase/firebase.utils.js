import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    
        apiKey: "AIzaSyDIkDB_zXJGaBvPR00-FFxAcQMw5gLIs1c",
        authDomain: "codinggurus-c589d.firebaseapp.com",
        projectId: "codinggurus-c589d",
        storageBucket: "codinggurus-c589d.appspot.com",
        messagingSenderId: "373545772959",
        appId: "1:373545772959:web:d78c0bfda5db8d15543faa",
        measurementId: "G-GLJB3ZMWQH"
      };
      
      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt: 'select_account'});
      export const signInWithGoogle =() => auth.signInWithPopup(provider);

      export default firebase;
