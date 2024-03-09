import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBV6slsAp5C7iVTtznRyfcgeNU3rk4Nk_4",
  authDomain: "homefeast-8b420.firebaseapp.com",
  projectId: "homefeast-8b420",
  storageBucket: "homefeast-8b420.appspot.com",
  messagingSenderId: "179323017631",
  appId: "1:179323017631:web:4e57fcddd065a79a94c5aa"
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

// Export the initialized services
export { db, auth, provider, storage };
