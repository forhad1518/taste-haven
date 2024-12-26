import React, { useContext } from 'react';
import { Authcontext } from '../providers/AuthProvider';
import Loading from './Loading';

const LoadingShow = ({ children }) => {
    const { showLoading } = useContext(Authcontext);
    if (showLoading) {
        <Loading></Loading>
    }
    return children;
};

export default LoadingShow;