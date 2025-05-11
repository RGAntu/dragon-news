// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlpXu03ErwnVHjD_RW19uVTTtLaGG3jfM",
  authDomain: "dragon-news-f9d9a.firebaseapp.com",
  projectId: "dragon-news-f9d9a",
  storageBucket: "dragon-news-f9d9a.firebasestorage.app",
  messagingSenderId: "612779693834",
  appId: "1:612779693834:web:4b5fe3fe0f2fb0bcb14cf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;