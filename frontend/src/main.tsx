import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FirebaseProvider } from './context/Firebase.tsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApYZ0ASMiYdMZQMq40XH07Qm-jT0b_QZo",
  authDomain: "thecomfortablecruise.firebaseapp.com",
  projectId: "thecomfortablecruise",
  storageBucket: "thecomfortablecruise.appspot.com",
  messagingSenderId: "438491509477",
  appId: "1:438491509477:web:295a362817c7057369da0c"
};
const firebaseApp=initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
  <FirebaseProvider firebase={firebaseApp}>  
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </FirebaseProvider>
  </BrowserRouter>



)
