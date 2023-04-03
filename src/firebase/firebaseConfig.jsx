//firebaseConfig.js: File containing the Firebase configuration details.
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getPerformance } from "firebase/performance";



const firebaseConfig = {
  apiKey: "AIzaSyCABwnGSASSpbFMJhzcnMRBFaWc82sJHrU",
  authDomain: "quize-a1c9e.firebaseapp.com",
  projectId: "quize-a1c9e",
  storageBucket: "quize-a1c9e.appspot.com",
  messagingSenderId: "571880932845",
  appId: "1:571880932845:web:fe544d31ef828a053113e4",
  measurementId: "G-CSGCGXDNSM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage(app)
const perf = getPerformance(app);

export { auth, db ,storage, perf };