// firebase-config.js

// 1. CDN Links se Firebase Import kar rahe hain
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

// 2. Aapki Firebase Configuration (Directly yahan likhiye)
const firebaseConfig = {
    apiKey: "AIzaSyDJBRGvsXS_0x6sKlLETdFq2_FckiX0ao8", // 🚨 Yahan Apni asli API key daalein
    authDomain: "grocery-hub-e8ae2.firebaseapp.com",
    projectId: "grocery-hub-e8ae2",
    storageBucket: "grocery-hub-e8ae2.firebasestorage.app",
    messagingSenderId: "1038208251449",
    appId: "1:1038208251449:web:895a459cc01a1193e9bfe8",
    measurementId: "G-B3JP3VPYX4"
};

// 3. Firebase Initialize karein
const app = initializeApp(firebaseConfig);

// 4. Firestore aur Auth ko export karein taaki baaki HTML files isko use kar sakein
export const db = getFirestore(app);
export const auth = getAuth(app);

console.log("🔥 Grocery Hub: Firebase CDN Initialized!");
