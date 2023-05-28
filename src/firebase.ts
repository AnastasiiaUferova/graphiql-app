// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnCS8s-ABuWvBEkLdxdXhJho1xVePYDkQ',
  authDomain: 'graphql-app-ca24b.firebaseapp.com',
  projectId: 'graphql-app-ca24b',
  storageBucket: 'graphql-app-ca24b.appspot.com',
  messagingSenderId: '1054152587201',
  appId: '1:1054152587201:web:24f32aefda3681fc296140',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const db = getFirestore(app);

export { auth };
