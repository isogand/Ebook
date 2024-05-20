// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNy42hrttWTfyjyPvWawTDqgG1Q_C8-vs",
    authDomain: "ebook-83bf9.firebaseapp.com",
    databaseURL: "https://ebook-83bf9-default-rtdb.firebaseio.com",
    projectId: "ebook-83bf9",
    storageBucket: "ebook-83bf9.appspot.com",
    messagingSenderId: "1031724134099",
    appId: "1:1031724134099:web:adbddd862df5eff6a02e26",
    measurementId: "G-ZKXVPCWZ4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// IOS:186934192169-uicr0hcvluvrdoko2al8g5rc1lssrs9v.apps.googleusercontent.com
// ANDROID:186934192169-2q12jalvtd4cqc210pmv3qgfce5h7e88.apps.googleusercontent.com
