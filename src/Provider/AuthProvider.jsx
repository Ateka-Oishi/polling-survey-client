import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, FacebookAuthProvider } from "firebase/auth";

import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}
const facebookSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
    // return signInWithPopup(auth, facebookProvider), signInWithRedirect(auth, facebookProvider);;
}

const logOut = () => {
    setLoading(true);
    return signOut(auth);
}

const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('current user', currentUser);

        

        
    });
    return () => {
        return unsubscribe();
    }
}, [])

const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    facebookSignIn,
    logOut,
    updateUserProfile
}
  return (
    <AuthContext.Provider
     value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
