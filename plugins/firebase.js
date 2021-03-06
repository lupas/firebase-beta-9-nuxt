import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa-YwgWTp2GDyVYEfv-XLb62100_HoEvU",
  authDomain: "nuxt-fire-demo.firebaseapp.com",
  projectId: "nuxt-fire-demo",
  storageBucket: "nuxt-fire-demo.appspot.com",
  messagingSenderId: "807370470428",
  appId: "1:807370470428:web:26da98c86c3fd352",
  measurementId: "G-XT6PVC1D4X",
};

let firebaseApp;

const apps = getApps();
if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = apps[0];
}

const db = getFirestore(firebaseApp, {});
const auth = getAuth(firebaseApp);

export { db, auth };
