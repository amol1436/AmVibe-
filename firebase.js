import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfejacT-dzHSA7rRAFyrVYVnmQ3eW1fRM",
  authDomain: "amvibe-56f84.firebaseapp.com",
  projectId: "amvibe-56f84",
  storageBucket: "amvibe-56f84.firebasestorage.app",
  appId: "1:791042962602:web:9df59ee1e093a866a04cd3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // लॉगिन फंक्शनसाठी
