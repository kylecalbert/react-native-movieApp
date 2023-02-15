import React, { useState, useContext } from "react";

const AuthorizationContext = React.createContext();

export const useAuthorization = () => {
  return useContext(AuthorizationContext);
};

export const AuthorizationProvider = ({ children }) => {
  const [isAuthorised, setIsAuthorised] = useState(false);

  return (
    <AuthorizationContext.Provider value={[isAuthorised, setIsAuthorised]}>
      {children}
    </AuthorizationContext.Provider>
  );
};
