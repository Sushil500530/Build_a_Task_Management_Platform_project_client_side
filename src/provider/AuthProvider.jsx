/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../components/hooks/useAxiosPublic";




export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
            const emailInUser = currentUser?.email || user?.email;
            const loggedUserEmail = {email: emailInUser};
            if(currentUser){
                axiosPublic.post('/jwt', loggedUserEmail)
                .then(() => {})
            }
            else{
                axiosPublic.post('/logout', loggedUserEmail)
                .then(() => {})
            }
        })
        return () => {
            unSubscriber()
        }
    }, [axiosPublic,user?.email])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        updateUserProfile,
        googleSignIn,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;