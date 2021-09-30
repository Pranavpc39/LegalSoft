
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBmVQiiZZ9Z4FGcSI2C668E-zAIfGHRBHQ",
  authDomain: "legalsoft-site.firebaseapp.com",
  projectId: "legalsoft-site",
  storageBucket: "legalsoft-site.appspot.com",
  messagingSenderId: "488429846713",
  appId: "1:488429846713:web:0f5827b98b8c7458a81b68"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {auth,firebase,storage};
export default db;



