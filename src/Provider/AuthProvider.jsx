import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

 export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [user,SetUser] = useState(null)
  const [loading,Setloding] = useState(true)
  const auth = getAuth(app);
  
 
 
  const  createUser = (email,password) =>{
    return  createUserWithEmailAndPassword(auth,email,password)
  }


 const authInfo ={
    user,
    loading,
    createUser,
 }
 
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;