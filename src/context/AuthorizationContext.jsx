import React, { useState } from 'react';

export const AuthorizationContext = React.createContext();

export const useAuthorization = () => {
  const [isAuthorised, setIsAuthorised] = useState(false);
  return [isAuthorised, setIsAuthorised];
};

export const AuthorizationProvider = ({ children }) => {
  const [isAuthorised, setIsAuthorised] = useAuthorization();

  return (
    <AuthorizationContext.Provider value={[isAuthorised, setIsAuthorised]}>
      {children}
    </AuthorizationContext.Provider>
  );
};
