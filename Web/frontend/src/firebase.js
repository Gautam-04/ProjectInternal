import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBjJmUuw7h17VOTdZj5wJjcIiBi3ss38jA",
  authDomain: "sihinternal.firebaseapp.com",
  projectId: "sihinternal",
  storageBucket: "sihinternal.appspot.com",
  messagingSenderId: "657202519702",
  appId: "1:657202519702:web:ccca054edd96c498b5ecb7",
  databaseURL: "https://sihinternal-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);