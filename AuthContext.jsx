import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // وهمي: قبول أي بريد وكلمة مرور
    setUser({ email, name: "مستخدم جديد" });
    return Promise.resolve();
  };

  const logout = () => setUser(null);

  const register = (email, password, name) => {
    setUser({ email, name });
    return Promise.resolve();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}