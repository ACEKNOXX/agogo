import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import * as admin from 'firebase-admin';
// const app = firebase.initializeApp({
//     apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId:process.env.REACT_APP_FIREBASE_APP_ID
// });
// firebase.analytics();


var app = firebase.initializeApp({
    apiKey: "AIzaSyAUDR68QE5-54kZmyYE2ErHeO-z2P03Zdg",
    authDomain: "aurora-2e2fe.firebaseapp.com",
    projectId: "aurora-2e2fe",
    storageBucket: "aurora-2e2fe.appspot.com",
    messagingSenderId: "448118339713",
    appId: "1:448118339713:web:fb9b9afdcb7b12fb967580",
    measurementId: "G-LXFRE8SM7F"
});
export const firebaseAdmin =admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});
export const auth =  app.auth();
export const firestore= app.firestore()
export const storage = app.storage();
export default app