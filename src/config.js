import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJJTZP3OhQsx3hOLnFac6HCxqmGvZMVcQ",
  authDomain: "hostel-management-dbatu.firebaseapp.com",
  projectId: "hostel-management-dbatu",
  storageBucket: "hostel-management-dbatu.firebasestorage.app",
  messagingSenderId: "19093859274",
  appId: "1:19093859274:web:cf17cae8db0c690707bd33",
  measurementId: "G-Z989KSB7WP"
};

const app = initializeApp(firebaseConfig);

/* ✅ EXPORT THESE */
export const auth = getAuth(app);
export const db = getFirestore(app);
