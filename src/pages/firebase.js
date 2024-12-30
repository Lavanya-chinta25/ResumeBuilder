// Import the necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"; // Import getFirestore

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBYJ_EVX60clkXjpg-QXOfWG4oB4orWaew",
  authDomain: "resume-app-5c838.firebaseapp.com",
  projectId: "resume-app-5c838",
  storageBucket: "resume-app-5c838.firebasestorage.app",
  messagingSenderId: "658392174141",
  appId: "1:658392174141:web:09ab90fd457edc8dda6454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
