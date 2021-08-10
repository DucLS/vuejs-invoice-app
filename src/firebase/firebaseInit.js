import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyCjQjhtMfaWon22qxHSciIah62w3KeZb-c",
    authDomain: "vuejs-invoice-app-8d2ec.firebaseapp.com",
    projectId: "vuejs-invoice-app-8d2ec",
    storageBucket: "vuejs-invoice-app-8d2ec.appspot.com",
    messagingSenderId: "715327501166",
    appId: "1:715327501166:web:d73f256d05737958b1477f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
