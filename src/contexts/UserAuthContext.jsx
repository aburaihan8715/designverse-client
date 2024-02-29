import { createContext } from "react";

export const UserAuthContext = createContext(null);
const user = true;
const role = "user";

const UserAuthContextProvider = ({ children }) => {
  return (
    <UserAuthContext.Provider
      value={{
        role,
        user,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextProvider;

/*
import { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
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

  // create user using email and password
  const createUserUsingEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (
    name = "unknown",
    photo = "https://i.ibb.co/nCCcPC7/demo-user.jpg",
  ) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // authentication using email and password
  const authenticationUsingEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // authentication using google
  const authenticationUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // authentication using github
  const authenticationUsingGithub = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  // email verification
  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // password reset email
  const passwordResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // sign out user
  const logOutUser = () => {
    return signOut(auth);
  };

  // authentication state observer
  useEffect(() => {
    setAuthLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);

      if (currentUser) {
        console.log("user logged in", currentUser);
        // get and set token
        axios
          .post("http://localhost:5000/jwt", {
            email: currentUser?.email,
          })
          .then((data) => {
            const token = data.data.token;
            localStorage.setItem("access_token", token);
          })
          .catch((error) => {
            console.log(error.message);
          });
      } else {
        console.log("user not logged in", currentUser);
        localStorage.removeItem("access_token");
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // console.log(user);

  return (
    <AuthContext.Provider
      value={{
        createUserUsingEmailPassword,
        authenticationUsingEmailPassword,
        user,
        setUser,
        logOutUser,
        updateUserProfile,
        authenticationUsingGoogle,
        authenticationUsingGithub,
        emailVerification,
        passwordResetEmail,
        authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
*/
