
import firebase from './firebase';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// put .env file

const firebaseConfig = {
    apiKey: "AIzaSyDL1a5cJrnguo0ot-lkg7K1Hya7xmwQnWk",
    authDomain: "fb-clone-719ad.firebaseapp.com",
    projectId: "fb-clone-719ad",
    storageBucket: "fb-clone-719ad.appspot.com",
    messagingSenderId: "138790771507",
    appId: "1:138790771507:web:7a71ca2e61537f80b97c46",
    measurementId: "G-6MSSBQCSS9"
};

// connect app to firebase
const app = initializeApp(firebaseConfig);

// connect to db
const db = getFirestore(app);

// authentication
const auth = getAuth(app);

// authentication provider
const provider = new GoogleAuthProvider();

// export
export { auth, provider };

export default db;

// google sign in pop up
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });
}

