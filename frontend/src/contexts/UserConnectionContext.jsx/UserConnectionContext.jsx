import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const UserConnectionContext = createContext();

export function UserConnectionContextProvider({ children }) {
  const [userConnected, setUserConnected] = useState(true);

  const UserConnectionContextProviderValue = useMemo(
    () => ({ userConnected, setUserConnected }),
    [userConnected, setUserConnected]
  );

  return (
    <UserConnectionContext.Provider value={UserConnectionContextProviderValue}>
      {children}
    </UserConnectionContext.Provider>
  );
}

UserConnectionContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserConnectionContext;
