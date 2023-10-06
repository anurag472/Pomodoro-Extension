
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import dotenv from 'dotenv'
//const dotenv = require('dotenv');

const firebaseConfig = {
    apiKey: "AIzaSyDx3PShQ8tIAgyFK2A_olkBPTgkNG3LRXc",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
}
console.log(firebaseConfig.apiKey)
const app = initializeApp(firebaseConfig)
//console.log(process.env.VITE_FIREBASE_API_KEY)
// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

const auth = getAuth(app);
export  {
    app,auth
}



