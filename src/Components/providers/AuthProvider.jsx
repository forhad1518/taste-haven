import axios from "axios";
import { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebaseAuth/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';



// eslint-disable-next-line react-refresh/only-export-components
export const Authcontext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    // Collect User
    const [user, setUser] = useState(null);

    // Loading
    const [loading, setLoading] = useState(true);

    const [showLoading, setShowLoading] = useState(true);

    // Google sign
    const googleSign = provider => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // login email password
    const loginEmailpass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // signup email password
    const signupUserPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // User LogOut 
    const logOut = () => {
        setLoading(!true)
        return signOut(auth)
    }
    // loged user Observer
    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser)

            const user = { email: currentUser?.email }
            if (currentUser?.email) {
                axios.post('https://assignment-11-server-eta-gules.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        setLoading(false);
                    })
            }
            else {
                axios.post('https://assignment-11-server-eta-gules.vercel.app/logout', {}, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        setLoading(false);
                    })
            }
        })
        return () => unSuscribe()
    }, [])
    // Sent Info
    const authInfo = {
        // Functions
        googleSign,
        setUser,
        logOut,
        signupUserPassword,
        loginEmailpass,
        setShowLoading,
        // data
        user,
        loading,
        showLoading


    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;