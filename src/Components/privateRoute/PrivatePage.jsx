import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../ShortComponents/Loading";
import { Authcontext } from "../providers/AuthProvider";

const PrivatePage = ({children}) => {
    const {user, loading} = useContext(Authcontext);
    if(loading) {
        return <Loading></Loading>
    }

    if(user?.email) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivatePage;