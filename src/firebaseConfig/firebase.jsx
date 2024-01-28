import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDLenr9r1SwYB9EQi_144SXE0fapMgz78k",
  authDomain: "games-hn.firebaseapp.com",
  projectId: "games-hn",
  storageBucket: "games-hn.appspot.com",
  messagingSenderId: "307192417012",
  appId: "1:307192417012:web:074216c841830a76c86ca1",
  measurementId: "G-Q7ERB1D1VJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)