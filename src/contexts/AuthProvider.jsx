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
  const [authLoading, setAuthLoading] = useState(true);

  // TODO: send verification email

  // TODO: send password reset email
  // create user using email and password
  const createUserUsingEmailPassword = async (email, password) => {
    setAuthLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = async (
    name,
    photo = "https://i.ibb.co/nCCcPC7/demo-user.jpg",
  ) => {
    setAuthLoading(true);
    return await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // authentication using email and password
  const authenticationUsingEmailPassword = async (email, password) => {
    setAuthLoading(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // authentication using google
  const authenticationUsingGoogle = async () => {
    setAuthLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return await signInWithPopup(auth, googleProvider);
  };

  // authentication using github
  const authenticationUsingGithub = async () => {
    setAuthLoading(true);
    const githubProvider = new GithubAuthProvider();
    return await signInWithPopup(auth, githubProvider);
  };

  // sign out user
  const logOutUser = async () => {
    setAuthLoading(true);
    return await signOut(auth);
  };

  // authentication state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // get and set token
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", {
            email: currentUser?.email,
          })
          .then((data) => {
            const token = data.data.token;
            localStorage.setItem("access_token", token);
            setAuthLoading(false);
          })
          .catch((error) => {
            console.log(error.message);
          });
      } else {
        localStorage.removeItem("access_token");
        setAuthLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // console.log(user);

  const authInfo = {
    createUserUsingEmailPassword,
    authenticationUsingEmailPassword,
    user,
    setUser,
    authLoading,
    setAuthLoading,
    logOutUser,
    updateUserProfile,
    authenticationUsingGoogle,
    authenticationUsingGithub,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
