import { createContext, useContext, useEffect, useState } from "react";
import { signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";
import firebase from 'firebase/compat/app';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  // const [user, setUser] = useState({});

  function setUpPhoneAuth(number) {
    const applicationVerifier = new firebase.auth.PhoneAuthProvider();
    return signInWithPhoneNumber(auth, number, applicationVerifier);
  }

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((currentuser) => {
  //     console.log("Auth", currentuser);
  //     setUser(currentuser);
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <userAuthContext.Provider
      value={{
        setUpPhoneAuth,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
