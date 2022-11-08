import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //----------------   SIGNUP  ----------------
  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //----------------   LOGIN  ----------------
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //----------------   LOGOUT  ----------------
  const userSignOut = () => {
    return signOut(auth);
  };
  //----------------   LOGIN WITH GOOGLE  ----------------
  const userLogInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  //----------------   UPDATE PROFILE  ----------------
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  //----------------   ON AUTH CHANGE  ----------------
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    userLogIn,
    userSignUp,
    userSignOut,
    userLogInWithGoogle,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
