import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCm2Uwf3L1vimqJ-9zzILMBfTen5T-HY9E",

  authDomain: "e-ride-4-cfcf9.firebaseapp.com",

  projectId: "e-ride-4-cfcf9",

  storageBucket: "e-ride-4-cfcf9.appspot.com",

  messagingSenderId: "679182546210",

  appId: "1:679182546210:web:ae65c035a7e2e4d73f217b"

};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
