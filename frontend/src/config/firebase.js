
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAaGGs6lfALSIFTZ8gKWK-4dgUmTKHjJmw",
  authDomain: "blog-app-187fe.firebaseapp.com",
  projectId: "blog-app-187fe",
  storageBucket: "blog-app-187fe.firebasestorage.app",
  messagingSenderId: "44199149811",
  appId: "1:44199149811:web:7bf1619de9802900e67786",
  measurementId: "G-VSTFM54WH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth