import { createContext } from 'react';

const UserContext = createContext({
    token: null,
    setToken: () => {},
    role: null,
    setRole: () => {}
});

export default UserContext;