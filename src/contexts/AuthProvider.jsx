import { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
const auth = getAuth(app);
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  // TODO: send verification email

  // TODO: send password reset email
  // create user using email and password
  const createUserUsingEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // authentication using email and password
  const authenticationUsingEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // authentication using google
  const authenticationUsingGoogle = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // authentication using github
  const authenticationUsingGithub = () => {
    setLoading(true);
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  // sign out user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // authentication state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // get and set token
      axios
        .post("http://localhost:5000/jwt", { email: currentUser?.email })
        .then((data) => {
          console.log(data.data);
          setLoading(false);
          setAuthError("");
        })
        .catch((error) => {
          setAuthError(error.message);
        });
      // console.log(currentUser);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authInfo = {
    createUserUsingEmailPassword,
    authenticationUsingEmailPassword,
    user,
    loading,
    setLoading,
    authError,
    setAuthError,
    logOutUser,
    updateUserProfile,
    authenticationUsingGoogle,
    authenticationUsingGithub,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
