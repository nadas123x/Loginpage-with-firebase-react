// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCX2gu97XKWbVi2noG4SmEi6mKrKLYgw5I",
  authDomain: "fir-auth-dec0d.firebaseapp.com",
  projectId: "fir-auth-dec0d",
  storageBucket: "fir-auth-dec0d.appspot.com",
  messagingSenderId: "803835897219",
  appId: "1:803835897219:web:3ca3b5e02abbfc6f7882b6",
  measurementId: "G-3E2JKZC8SS"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };