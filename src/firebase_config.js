// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgKSZdrls_syrcqWTLDmYganWq9zpha4M",
  authDomain: "inf331-swapp.firebaseapp.com",
  projectId: "inf331-swapp",
  storageBucket: "inf331-swapp.appspot.com",
  messagingSenderId: "1021865708470",
  appId: "1:1021865708470:web:8a45b8bd26b9452e620f17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);