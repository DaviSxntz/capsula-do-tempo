import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "CADASTRAR API KEY",
  authDomain: "CADASTRAR AUTH DOMAIN",
  projectId: "CADASTRAR PROJECT ID",
  storageBucket: "CADASTRAR STORAGE BUCKET",
  messagingSenderId: "CADASTRAR MESSAGING SENDER ID",
  appId: "CADASTRAR APP ID",
  measurementId: "CADASTRAR MEASUREMENT ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
