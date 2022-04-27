// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUwHTZeYhJTiVF489DQyiZS_F01XeWMdo",
  authDomain: "cafeco-store.firebaseapp.com",
  projectId: "cafeco-store",
  storageBucket: "cafeco-store.appspot.com",
  messagingSenderId: "202018280739",
  appId: "1:202018280739:web:3ceae1576b3ed77be82896",
  measurementId: "G-20DJCXJG3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;