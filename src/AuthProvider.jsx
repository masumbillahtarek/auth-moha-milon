import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const googleProvider = new GoogleAuthProvider();
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
  
   // const authInfo={name:'Nodi Sagor Khal Bil'}
   const createUser=(email,password)=>{
    setLoading(true)
return  createUserWithEmailAndPassword(auth, email, password)
   }
   const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }
   const logOut=()=>{
    setLoading(true)
    return signOut(auth)
   }
   const googleSignInProvider=()=>{
     setLoading(true)
    return signInWithPopup(auth, googleProvider)
   }
   //Observe Auth State Change
   useEffect(()=>{
    const unSubscribe=  onAuthStateChanged(auth, (currentUser) => {
setUser(currentUser)
console.log('Observing Current User inside useEffect of Auth Provider',currentUser)
setLoading(false)
});
return()=>{
    unSubscribe();
}
   },[])
   const authInfo={user,loading,createUser,signInUser,logOut,googleSignInProvider}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
{/*
    AuthProvider.propTypes={
 children:PropTypes.node   
}
 */}