import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/analytics";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCsk_OOb_ssJvrI7oBwRgH_vw6gMsKMkNk",
  authDomain: "awesome-twitter-clone.firebaseapp.com",
  projectId: "awesome-twitter-clone",
  storageBucket: "awesome-twitter-clone.appspot.com",
  messagingSenderId: "628902495907",
  appId: "1:628902495907:web:1a8e87ee6838e8cd4fe116",
  measurementId: "G-XDQG0HTV0H",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();
const auth = firebase.auth();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, db, auth, timestamp };
