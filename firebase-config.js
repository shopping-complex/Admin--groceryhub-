

// firebase-config.js

// 🔥 Naye 12.17.0 CDN Links se Firebase aur Firestore import kar rahe hain
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

// Aapki details
const firebaseConfig = {
    apiKey: "AIzaSyDJBRGvsXS_0x6sKlLETdFq2_FckiX0ao8", // Yahan apna asli API key wapas daal dijiyega
    authDomain: "grocery-hub-e8ae2.firebaseapp.com",
    projectId: "grocery-hub-e8ae2",
    storageBucket: "grocery-hub-e8ae2.firebasestorage.app",
    messagingSenderId: "1038208251449",
    appId: "1:1038208251449:web:895a459cc01a1193e9bfe8",
    measurementId: "G-B3JP3VPYX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services and Export them
export const db = getFirestore(app);
export const auth = getAuth(app);

console.log("🔥 verify Successfully");
