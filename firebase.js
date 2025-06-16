// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDGAjXCIdqSx_FhChoLUjAQ0kN5HSQbTF0",
  authDomain: "amvibe-28f17.firebaseapp.com",
  projectId: "amvibe-28f17",
  storageBucket: "amvibe-28f17.firebasestorage.app",
  messagingSenderId: "452233184351",
  appId: "1:452233184351:web:4781d4f09e66a8643c07ea",
  measurementId: "G-SGP0CJFDGE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
