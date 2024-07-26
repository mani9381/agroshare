// src/components/AuthContext.js

import React, { createContext, useState, useContext } from 'react';
import { loginUser, logoutUser, isAuthenticated } from '../auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(isAuthenticated());

  const login = async (email, password) => {
        let response = await loginUser(email,password)
        return response

  };

  const logout = () => {
    logoutUser();
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
