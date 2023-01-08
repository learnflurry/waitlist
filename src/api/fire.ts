import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQnwwyzTIhGoqfpTuBDveTjBCl9uau_f4",
    authDomain: "flurry-waitlist.firebaseapp.com",
    projectId: "flurry-waitlist",
    storageBucket: "flurry-waitlist.appspot.com",
    messagingSenderId: "361597739036",
    appId: "1:361597739036:web:e802a9b4577ac3fa137fd9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
