import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDv0O7Ii_YVF1BZwNP2RyZ93T-v2HP-wiY",
  authDomain: "chittychatter-23536.firebaseapp.com",
  projectId: "chittychatter-23536",
  storageBucket: "chittychatter-23536.appspot.com",
  messagingSenderId: "770635563935",
  appId: "1:770635563935:web:fba092015fbd943308f3aa",
  measurementId: "G-B061Q4DG5H"
}).auth()