// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5D3gRZgDOkAF9L8bQZNlzULSyjt2-xro",
  authDomain: "online-job-portal-38f4e.firebaseapp.com",
  projectId: "online-job-portal-38f4e",
  storageBucket: "online-job-portal-38f4e.appspot.com",
  messagingSenderId: "468703790229",
  appId: "1:468703790229:web:40a34c2e755aa60b57c79c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};