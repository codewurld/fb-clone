
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
const firebaseApp = firebase.initializeApp(firebaseConfig);

// connect to db
const db = firebaseApp.firestore();