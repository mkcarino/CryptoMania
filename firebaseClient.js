import firebase from 'firebase/app';
import 'firebase/auth'; 
import "firebase/firestore"

/* import "firebase/storage"; */
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSENGER_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
  console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

 
export default app;
export const auth = app.auth();

export const db = firebase.firestore();