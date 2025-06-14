// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfejacT-dzHSA7rRAFyrVYVnmQ3eW1fRM",
  authDomain: "amvibe-56f84.firebaseapp.com",
  projectId: "amvibe-56f84",
  storageBucket: "amvibe-56f84.appspot.com", // ←✅ ही ओळ चुकीची होती, ती दुरुस्त केली
  appId: "1:791042962602:web:9df59ee1e093a866a04cd3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
