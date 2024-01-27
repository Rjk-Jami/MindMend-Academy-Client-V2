import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { toast } from 'react-hot-toast';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children} ) => {


    const [user, setUser] = useState(null)
    const [loadingUser, setUserLoading] = useState(true)


    const CreateUser = (email, password) => {
        setUserLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setUserLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const SignOutUser = () => {
        setUserLoading(true)
        setUser('')
        toast.success('logout')

        return signOut(auth)
    }

    const loginWithGoogle = () => {
        setUserLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    //monitor auth state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            setUserLoading(false)
        })
        return () => { unSubscribe() }
    }, [])


    const AuthInfo = {
        auth,
        user,
        loadingUser,
        login,
        CreateUser,
        SignOutUser,
        loginWithGoogle,
        setUserLoading


    }




    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};




export default AuthProvider;