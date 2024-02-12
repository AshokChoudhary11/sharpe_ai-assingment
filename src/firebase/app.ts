// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJZBIQzBmQ0jXj39w8QlOJTu9qfF7ek7c",
  authDomain: "sharpe-ai-1c86f.firebaseapp.com",
  projectId: "sharpe-ai-1c86f",
  storageBucket: "sharpe-ai-1c86f.appspot.com",
  messagingSenderId: "452052363504",
  appId: "1:452052363504:web:da404b4c8f71d33a72ba35",
  measurementId: "G-2SH63G3VR1"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}
export default app;
