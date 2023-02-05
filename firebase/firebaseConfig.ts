import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOQI0Ghedv42_AIDjGpM3y1PJxrW_2GuI",
  authDomain: "the-penny-store.firebaseapp.com",
  projectId: "the-penny-store",
  storageBucket: "the-penny-store.appspot.com",
  messagingSenderId: "22096669478",
  appId: "1:22096669478:web:1d506a459130337dec6fe7",
  measurementId: "G-P6NHGQBMCP",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const analytics = getAnalytics(app);
