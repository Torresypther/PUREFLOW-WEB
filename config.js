import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, updatePassword } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';
import { getFirestore, doc, updateDoc, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgRL-eo8zC5mbOSLGDv-IvsEXHr4hB79A",
  authDomain: "pureflow-164ca.firebaseapp.com",
  databaseURL: "https://pureflow-164ca-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pureflow-164ca",
  storageBucket: "pureflow-164ca.firebasestorage.app",
  messagingSenderId: "596948053288",
  appId: "1:596948053288:web:6513676f3f4a8bda63f41d",
  measurementId: "G-0SKMP6HMZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export instances
