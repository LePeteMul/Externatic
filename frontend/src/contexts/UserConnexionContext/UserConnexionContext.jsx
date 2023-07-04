import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const UserConnexionContext = createContext();

export function UserConnexionContextProvider({ children }) {
  const [userConnected, setUserConnected] = useState(true);
  const [userId, setUserId] = useState(0);

  const UserConnexionContextProviderValue = useMemo(
    () => ({ userConnected, setUserConnected, userId, setUserId }),
    [userConnected, setUserConnected, userId, setUserId]
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
