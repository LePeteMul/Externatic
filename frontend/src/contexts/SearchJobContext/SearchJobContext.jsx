import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const SearchJobContext = createContext();

export function SearchJobContextProvider({ children }) {
  const [searchJob, setSearchJob] = useState("all");

  const SearchJobContextProviderValue = useMemo(
    () => ({ searchJob, setSearchJob }),
    [searchJob, setSearchJob]
  );

  return (
    <SearchJobContext.Provider value={SearchJobContextProviderValue}>
      {children}
    </SearchJobContext.Provider>
  );
}

SearchJobContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchJobContext;
