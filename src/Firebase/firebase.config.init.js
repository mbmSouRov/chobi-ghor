// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  // apiKey: "AIzaSyAU3Ln2sF6P1Mc49MSH-aHi-I_qqSbPjuY",
  // authDomain: "chobi-ghor.firebaseapp.com",
  // projectId: "chobi-ghor",
  // storageBucket: "chobi-ghor.appspot.com",
  // messagingSenderId: "291073138155",
  // appId: "1:291073138155:web:79900ae233f8608e814dae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
