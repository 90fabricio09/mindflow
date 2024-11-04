import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuhdbnc_2My7z3m728_yBA02Af_DHRmM4",
  authDomain: "websitemindflow.firebaseapp.com",
  projectId: "websitemindflow",
  storageBucket: "websitemindflow.appspot.com",
  messagingSenderId: "603409916521",
  appId: "1:603409916521:web:1452f2737e31bd8e3af8f8",
  measurementId: "G-ZQ9V47LFFJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export const firestore = getFirestore(app);