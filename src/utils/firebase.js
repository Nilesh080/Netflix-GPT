// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAiMG0lcQn-Po8lwBi86M69x0qJWoFumk",
  authDomain: "netflix-gpt-5ac7e.firebaseapp.com",
  projectId: "netflix-gpt-5ac7e",
  storageBucket: "netflix-gpt-5ac7e.appspot.com",
  messagingSenderId: "367588153403",
  appId: "1:367588153403:web:c2459ef8e2412eab1a641e",
  measurementId: "G-5VSHBCBLW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();