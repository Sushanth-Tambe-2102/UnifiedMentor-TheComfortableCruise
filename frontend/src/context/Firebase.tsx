import { initializeApp } from "firebase/app";
import React, { createContext, useContext, ReactNode, useState } from "react";
import { getAuth,createUserWithEmailAndPassword,UserCredential,User,signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore,collection,addDoc } from "firebase/firestore";
import { Collections, Phone } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { Alert } from "@mui/material";

type FirebaseContextType = {
  
  signupUserwithEmailandPassword: (email: string, password: string, name:string,cruiseCode:string) => Promise<any>;
  loginUserwithEmailandPassword: (email: string, password: string) => Promise<any>;
  
};
const FirebaseContext = createContext<FirebaseContextType | null>(null);


export const useFirebase = () => {
  const firebaseContext = useContext(FirebaseContext);
  if (!firebaseContext) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return firebaseContext;
};


type FirebaseProviderProps = {

  firebase: any;
  children: ReactNode;
};

export const FirebaseProvider: React.FC<FirebaseProviderProps> = (props) => {
  const { children,firebase } = props;
  const firebaseAuth = getAuth(firebase)
  const fireStore = getFirestore(firebase)
  const navigate = useNavigate();

  const signupUserwithEmailandPassword  = (email:string,password:string,name:string,cruiseCode:string )=>
       createUserWithEmailAndPassword(firebaseAuth, email, password).then(async(userCredential:UserCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/login');
        console.log("Successfully logged in")
        
        return await addDoc(collection(fireStore,'Voyager'),{

          name,
          email,
          cruiseCode,
          UserId:user.uid})
        
        

        
        // Additional actions after successful authentication
      })
      .catch((error) => {
        var errorCode = error.code;
      
        
        if(errorCode=="auth/missing-password"){
          return "Missing Password"
        }
        if(errorCode=="auth/email-already-in-use"){
          return "Email already in use"
        }     })


    const loginUserwithEmailandPassword = (email:string,password:string)=>
        signInWithEmailAndPassword(firebaseAuth,email,password)
        .then(async(userCredential:UserCredential) => {
          
          navigate('/user');


        }).
        catch((error) => {
          var errorCode = error.code;
      
       
          if(errorCode=="auth/invalid-email"){
            return "Invalid Email"
          }
          if(errorCode=="auth/invalid-credential"||"auth/missing-password"){
            return "Invalid Password"
          }         
                 
          
          })
        
  
        

  return (
    <FirebaseContext.Provider value={{ signupUserwithEmailandPassword,loginUserwithEmailandPassword}}>
      {children}
    </FirebaseContext.Provider>
  );
};
