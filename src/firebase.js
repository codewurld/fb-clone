
import firebase from './firebase';
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { browserSessionPersistence, browserPopupRedirectResolver } from '@firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { actionTypes } from './reducer';
import { useStateValue } from './ContextProvider';


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


export const auth = initializeAuth(app, {
    persistence: browserSessionPersistence,
    popupRedirectResolver: browserPopupRedirectResolver,
});
// const auth = getAuth(app);

// connect to db
export const db = getFirestore(app);

// authentication
// const auth = getAuth(app);

// authentication provider
const provider = new GoogleAuthProvider();

// export
export { provider };

// export default firebase;



// const [state, dispatch] = useStateValue();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        // pass user cred in data layer
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });
}

