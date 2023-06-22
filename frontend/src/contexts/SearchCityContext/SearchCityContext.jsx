import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const SearchCityContext = createContext();

export function SearchCityContextProvider({ children }) {
  const [searchCity, setSearchCity] = useState("");

  const SearchCityContextProviderValue = useMemo(
    () => ({ searchCity, setSearchCity }),
    [searchCity, setSearchCity]
  );

  return (
    <SearchCityContext.Provider value={SearchCityContextProviderValue}>
      {children}
    </SearchCityContext.Provider>
  );
}

SearchCityContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchCityContext;
