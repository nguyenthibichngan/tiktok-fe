// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB_EPYd2oyhgDN-gOaCP59mNTJg5yJmHnI',
    authDomain: 'tiktok-145d4.firebaseapp.com',
    databaseURL: 'https://tiktok-145d4-default-rtdb.firebaseio.com',
    projectId: 'tiktok-145d4',
    storageBucket: 'tiktok-145d4.appspot.com',
    messagingSenderId: '913503967834',
    appId: '1:913503967834:web:a842b215de3ea947119663',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const bd = app.firestore();
