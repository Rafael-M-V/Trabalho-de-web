import React, { useState, useEffect } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const localToken = localStorage.getItem('acessToken')
        if (localToken) {
            setToken(localToken)
        }
    }, [token])

    return (
        <UserContext.Provider value={{ token, setToken }}>
            {children}
        </UserContext.Provider>
    );
}
 
export default UserProvider;