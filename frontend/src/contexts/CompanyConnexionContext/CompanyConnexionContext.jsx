import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const CompanyConnexionContext = createContext();

export function CompanyConnexionContextProvider({ children }) {
  const [companyConnected, setCompanyConnected] = useState(false);
  const [companyId, setCompanyId] = useState(null);

  const CompanyConnexionContextProviderValue = useMemo(
    () => ({
      companyConnected,
      setCompanyConnected,
      companyId,
      setCompanyId,
    }),
    [companyConnected, setCompanyConnected, companyId, setCompanyId]
  );

  return (
    <CompanyConnexionContext.Provider
      value={CompanyConnexionContextProviderValue}
    >
      {children}
    </CompanyConnexionContext.Provider>
  );
}

CompanyConnexionContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CompanyConnexionContext;
