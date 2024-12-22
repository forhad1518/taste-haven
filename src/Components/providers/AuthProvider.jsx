
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
    const [loading, setLoading] = useState(true)

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
        // data
        user,
        loading,


    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;