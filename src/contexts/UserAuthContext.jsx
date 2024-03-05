import { createContext, useEffect, useState } from "react";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { publicRequest } from "../utils/requestMethod";

export const UserAuthContext = createContext(null);

const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // TEMPORARY
  const role = "user";

  // create user using email and password
  const createUserUsingEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (
    name = "unknown",
    photo = "https://i.ibb.co/KwgKgw1/noavatar.png",
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
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log(currentUser?.email);
      if (currentUser) {
        try {
          const res = await publicRequest.post("users/token", {
            email: currentUser.email,
          });
          const token = res.data.data.token;
          localStorage.setItem("accessToken", token);
        } catch (error) {
          console.log(error);
        }
      } else {
        localStorage.removeItem("accessToken");
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  return (
    <UserAuthContext.Provider
      value={{
        createUserUsingEmailPassword,
        authenticationUsingEmailPassword,
        user,
        role,
        logOutUser,
        updateUserProfile,
        authenticationUsingGoogle,
        authenticationUsingGithub,
        passwordResetEmail,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextProvider;
