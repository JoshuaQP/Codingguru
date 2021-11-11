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



     
      export const createUserProfileDocument = async (userAuth, additionalData ) => {
      if (!userAuth) return;
     

      const  userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
          const { displayName , email } = userAuth;
          const createdAt = new Date();


        try {
          await userRef.set ({
           displayName,
           email,
           createdAt,
           ...additionalData
          })
        } catch(error){
            console.log('error creating user', error.message);

        }
      }
      return userRef;
       
      }



    //   Google auth 
     export const fire = firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();
    //     gives use acess to auth libary
      const provider = new firebase.auth.GoogleAuthProvider();
    //   want to trigger the google pop up
      provider.setCustomParameters({prompt: 'select_account'});
      export const signInWithGoogle = () => auth.signInWithPopup(provider);

      export default firebase;
