import { initializeApp } from 'firebase/app';
import { createContext, useContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDLhbHYSpzTVPuZfV-kl3jvD-HW1HMYjxM',
  authDomain: 'linkdin-clone-b8887.firebaseapp.com',
  projectId: 'linkdin-clone-b8887',
  storageBucket: 'linkdin-clone-b8887.appspot.com',
  messagingSenderId: '914627883284',
  appId: '1:914627883284:web:432c85572ca7b320fbd201',
  measurementId: 'G-NJ7PM6WSG4',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const createAuth = createContext();
export const useAuth = () => {
  return useContext(createAuth);
};
const CustomAuthProvider = ({ children }) => {
  const [customer, setCustomer] = useState(null);
  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const loginUser = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setCustomer(usr);
      } else {
        setCustomer(null);
      }
    });
  }, []);
  const isLogged = customer ? true : false;
  return (
    <createAuth.Provider value={{ createUser, loginUser, logout, isLogged }}>
      {children}
    </createAuth.Provider>
  );
};
export default CustomAuthProvider;
