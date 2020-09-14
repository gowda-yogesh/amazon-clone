import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA4VYo3kfOaoRZU6Qp7jhvOUSzErxg0_J4",
    authDomain: "clone-9660f.firebaseapp.com",
    databaseURL: "https://clone-9660f.firebaseio.com",
    projectId: "clone-9660f",
    storageBucket: "clone-9660f.appspot.com",
    messagingSenderId: "740841298823",
    appId: "1:740841298823:web:807819e6a932a951565122",
    measurementId: "G-CFBPMTPHL3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const db = firebaseApp.firestore();

export { db, auth };
