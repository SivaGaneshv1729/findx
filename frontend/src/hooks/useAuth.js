import { useContext } from 'react';
// This is a re-export from AuthContext.jsx to simplify imports
// but the useAuth hook is already in AuthContext.jsx.
// For simplicity, we can just export it from there.
// This file can be seen as redundant but good for separation of concerns.
import { useAuth as useAuthFromContext } from '../contexts/AuthContext';

export const useAuth = () => {
    return useAuthFromContext();
};
