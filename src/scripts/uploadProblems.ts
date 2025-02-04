import { firestore } from "@/firebase/firebase";
import { problems } from "@/mockProblems/problems";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTNtV0Soqt77dkNPHUSlbH3VuCJ6VfXb4",
  authDomain: "journalapp-cd2e4.firebaseapp.com",
  projectId: "journalapp-cd2e4",
  storageBucket: "journalapp-cd2e4.firebasestorage.app",
  messagingSenderId: "230158910046",
  appId: "1:230158910046:web:c6b1d147b65825c9cbaacf"
};

const app = initializeApp(firebaseConfig);
console.log("Firebase initialized successfully");

const pushProblemsToFirestore = async () => {
    try {
      const problemsCollection = collection(firestore, "problems");
  
      for (const problem of problems) {
        const problemRef = doc(problemsCollection, problem.id);
        await setDoc(problemRef, problem);
        console.log(`✅ Added: ${problem.title}`);
      }
  
      console.log("🔥 All problems have been added successfully!");
    } catch (error) {
      console.error("❌ Error adding problems:", error);
    }
  };

pushProblemsToFirestore();