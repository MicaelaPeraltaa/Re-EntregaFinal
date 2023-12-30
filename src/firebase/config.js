
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvxVqHNIdGpG9u4Fp5seDAH92Z4hkw_mQ",
  authDomain: "pet-shop-46712.firebaseapp.com",
  projectId: "pet-shop-46712",
  storageBucket: "pet-shop-46712.appspot.com",
  messagingSenderId: "104506742175",
  appId: "1:104506742175:web:8426360dcda5194cfd19aa",
  measurementId: "G-R1NK66N4NT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);