// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//cod Ariel
// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDAoR0jNR5gNJOPtJayLpp_nXbZRprseAA",
  authDomain: "battaglia-db.firebaseapp.com", // Asegúrate de que sea correcto
  projectId: "battaglia-db",
  storageBucket: "battaglia-db.appspot.com",
  messagingSenderId: "900186092659", // Puedes omitirlo si no lo necesitas
  appId: "1:900186092659:android:3b763b04cba2d051086606",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Inicializa Firestore
export const db = getFirestore(app);
//end
{/*export const firebaseConfig = {
  apiKey: "AIzaSyB1YRilEvVGHe3sCCQV5I3xLa-Qcwcoozs",
  authDomain: "alert-movil.firebaseapp.com",
  projectId: "alert-movil",
  storageBucket: "alert-movil.appspot.com",
  messagingSenderId: "135959982270",
  appId: "1:135959982270:web:de47175785cf1f7891eeef"
};*/}
