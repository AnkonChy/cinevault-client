// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJddC9NQqSoh2aMegb2W17m2wmsGTnPOs",
  authDomain: "portal-91857.firebaseapp.com",
  projectId: "portal-91857",
  storageBucket: "portal-91857.firebasestorage.app",
  messagingSenderId: "504443157721",
  appId: "1:504443157721:web:2298588e3cedd0f701d2c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
