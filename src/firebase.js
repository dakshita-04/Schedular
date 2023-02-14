import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmz4CEtBk8KKI1kBTD-yyt2NYk6N3JQUQ",
  authDomain: "calendar-app-7f344.firebaseapp.com",
  projectId: "calendar-app-7f344",
  storageBucket: "calendar-app-7f344.appspot.com",
  messagingSenderId: "408982903980",
  appId: "1:408982903980:web:721dee1b24ebb42afbd309",
  measurementId: "G-FB93W69VRC"
};

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

//  export {auth}
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;