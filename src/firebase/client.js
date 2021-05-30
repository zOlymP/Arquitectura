import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

!firebase.apps.length &&
  firebase.initializeApp({
    apiKey: "AIzaSyB1spoPRdoqzuZvXdytUxIM25NqLARcgUE",
    authDomain: "narradores-digitales.firebaseapp.com",
    projectId: "narradores-digitales",
    storageBucket: "narradores-digitales.appspot.com",
    messagingSenderId: "304613265527",
    appId: "1:304613265527:web:ef5fccf6912ed0ef833672",
    measurementId: "G-C7JD1JMPZ2",
  });

export const auth = firebase.auth();

export const database = firebase.firestore();
