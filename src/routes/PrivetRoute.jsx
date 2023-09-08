import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className='w-[200px] mx-auto'><progress className="progress w-56"></progress></div>;
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace={true}>Login</Navigate>

};

export default PrivetRoute;