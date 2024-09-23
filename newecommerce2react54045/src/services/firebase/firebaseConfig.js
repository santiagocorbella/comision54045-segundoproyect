import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCVmQbTuriE-bmo5bGL4OsSx6K0cWlGXSA",
  authDomain: "backend54045segundoproyecto.firebaseapp.com",
  projectId: "backend54045segundoproyecto",
  storageBucket: "backend54045segundoproyecto.appspot.com",
  messagingSenderId: "677891632002",
  appId: "1:677891632002:web:6add3394b83bcce5b77d9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)