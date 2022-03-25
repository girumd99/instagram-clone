import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0-BEAh66sium9MTCm-zfOIebfedhDk8s",
    authDomain: "instagram-clone-3d9d0.firebaseapp.com",
    projectId: "instagram-clone-3d9d0",
    storageBucket: "instagram-clone-3d9d0.appspot.com",
    messagingSenderId: "462956876729",
    appId: "1:462956876729:web:0751ca719413cd4600dc68",
    measurementId: "G-K3S5N22JZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, auth, storage};