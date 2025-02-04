
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTNtV0Soqt77dkNPHUSlbH3VuCJ6VfXb4",
  authDomain: "journalapp-cd2e4.firebaseapp.com",
  projectId: "journalapp-cd2e4",
  storageBucket: "journalapp-cd2e4.firebasestorage.app",
  messagingSenderId: "230158910046",
  appId: "1:230158910046:web:c6b1d147b65825c9cbaacf"
};

let app; 

if (!getApps().length) { 
  try {
    app = initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully");
  } catch (error) {
    console.error("Firebase initialization error:", error);
    throw error; 
  }
} else {
  app = getApp(); // Get the existing app
  console.log("Firebase app already initialized");
}

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
