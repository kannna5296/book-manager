import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

console.log("CONFIG" + firebaseConfig.apiKey);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const initializeFirebaseApp = () =>
  !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
