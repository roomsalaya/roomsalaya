import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBbBueyE0VD-IOJDf6ELX-Qw8LMN5NjqnY",
    authDomain: "roomsalaya.firebaseapp.com",
    projectId: "roomsalaya",
    storageBucket: "roomsalaya.appspot.com",
    messagingSenderId: "520341955478",
    appId: "1:520341955478:web:5ce98e18995c1bc1c9f3b7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
