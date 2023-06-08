import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const SearchContractContext = createContext();

export function SearchContractContextProvider({ children }) {
  const [searchContract, setSearchContract] = useState("");

  const SearchContractContextProviderValue = useMemo(
    () => ({ searchContract, setSearchContract }),
    [searchContract, setSearchContract]
  );

  return (
    <SearchContractContext.Provider value={SearchContractContextProviderValue}>
      {children}
    </SearchContractContext.Provider>
  );
}

SearchContractContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchContractContext;
