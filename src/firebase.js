
import firebase from './firebase';
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { browserSessionPersistence, browserPopupRedirectResolver } from '@firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { actionTypes } from './reducer';
import { useStateValue } from './ContextProvider';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
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

