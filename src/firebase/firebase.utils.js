import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyB0C2IgWeZLgXEyAdFhsIQt8vEMaK0nTRw",
    authDomain: "prithrift-db.firebaseapp.com",
    projectId: "prithrift-db",
    storageBucket: "prithrift-db.appspot.com",
    messagingSenderId: "116079110592",
    appId: "1:116079110592:web:4ab86aadc142f373ef8025",
    measurementId: "G-Q9KBKTWH18"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const fireStore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;