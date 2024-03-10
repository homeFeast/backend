import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database"; // Import for Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyAKesrf-_1EIoAuJwnTwVNFIho2MLx8sag",
  authDomain: "hack-aef97.firebaseapp.com",
  projectId: "hack-aef97",
  storageBucket: "hack-aef97.appspot.com",
  messagingSenderId: "367239683946",
  appId: "1:367239683946:web:b2720e15773de700a10f13",
  measurementId: "G-K6GHZV5LX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication and GoogleAuthProvider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Firebase Storage
const storage = getStorage(app);

// Initialize Firebase Realtime Database
const realtimedb = getDatabase(app);

// Export the initialized services
export { db, auth, provider, storage, realtimedb };
