
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDOC4Kka9VJEtrI6GrDS_SgelV_2V_L4x4",
  authDomain: "legalsoft-1a014.firebaseapp.com",
  projectId: "legalsoft-1a014",
  storageBucket: "legalsoft-1a014.appspot.com",
  messagingSenderId: "4195971513",
  appId: "1:4195971513:web:a04a26290e81135afe0668",
  measurementId: "G-H3MS6T9CL6"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {auth,firebase,storage};
export default db;



