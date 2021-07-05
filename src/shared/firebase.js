import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7s9JilC3Rylyg3Tkr1p-klxb1bXbK4y0",
  authDomain: "image-community-fbed3.firebaseapp.com",
  projectId: "image-community-fbed3",
  storageBucket: "image-community-fbed3.appspot.com",
  messagingSenderId: "1010791889665",
  appId: "1:1010791889665:web:4ec73e570367be840f3900",
  measurementId: "G-TV3YSK5N8Y",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };
