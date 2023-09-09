import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    
    return (
        <div>
            <h1>{user?.displayName}</h1>
            <h2>this is Dashboard</h2>
            <button onClick={handleLogOut}>Logout</button>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Dashboard;