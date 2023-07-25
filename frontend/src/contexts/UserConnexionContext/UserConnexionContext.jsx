import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const UserConnexionContext = createContext();

export function UserConnexionContextProvider({ children }) {
  const [userConnected, setUserConnected] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const UserConnexionContextProviderValue = useMemo(
    () => ({
      userConnected,
      setUserConnected,
      userId,
      setUserId,
      isAdmin,
      setIsAdmin,
    }),
    [userConnected, setUserConnected, userId, setUserId, isAdmin, setIsAdmin]
  );

  return (
    <UserConnexionContext.Provider value={UserConnexionContextProviderValue}>
      {children}
    </UserConnexionContext.Provider>
  );
}

UserConnexionContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserConnexionContext;
