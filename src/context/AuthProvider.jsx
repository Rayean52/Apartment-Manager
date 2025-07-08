import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import Loading from '../Components/Loader/Loading';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const signOutUser = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUsers(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const userInfo = {
        users,
        loading,
        setUsers,
        setLoading,
        signIn,
        signUp,
        googleSignIn,
        signOutUser,

    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;