// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQDrgTnr6RUjbm1YuLLwxrWVh5CcTQ-wQ",
  authDomain: "netflixtgpt.firebaseapp.com",
  projectId: "netflixtgpt",
  storageBucket: "netflixtgpt.firebasestorage.app",
  messagingSenderId: "314854104064",
  appId: "1:314854104064:web:55aaf5cc72f07aa6dd0ce5",
  measurementId: "G-F8PZRZ2M7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();