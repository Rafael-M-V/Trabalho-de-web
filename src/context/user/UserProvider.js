import React, { useState, useEffect } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const localToken = localStorage.getItem('acessToken')
        if (localToken) {
            setToken(localToken)
        }
    }, [token])

    useEffect(() => {
        const localRole = localStorage.getItem('role')
        if (role) {
            setToken(localRole)
        }
    }, [role])

    return (
        <UserContext.Provider value={{ token, setToken, role, setRole }}>
            {children}
        </UserContext.Provider>
    );
}
 
export default UserProvider;