// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJBRGvsXS_0x6sKlLETdFq2_FckiX0ao8",
  authDomain: "grocery-hub-e8ae2.firebaseapp.com",
  projectId: "grocery-hub-e8ae2",
  storageBucket: "grocery-hub-e8ae2.firebasestorage.app",
  messagingSenderId: "1038208251449",
  appId: "1:1038208251449:web:895a459cc01a1193e9bfe8",
  measurementId: "G-B3JP3VPYX4"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 🔥 Firestore initialized with Cloudflare / Mobile Network Hang Fix
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true
});

// Initialize Auth for Admin login
export const auth = getAuth(app);

console.log("🔥 Grocery Hub Firebase Connected Successfully!");
