import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const ResultJobContext = createContext();

export function ResultJobContextProvider({ children }) {
  const [resultJob, setResultJob] = useState("");

  const ResultJobContextProviderValue = useMemo(
    () => ({ resultJob, setResultJob }),
    [resultJob, setResultJob]
  );

  return (
    <ResultJobContext.Provider value={ResultJobContextProviderValue}>
      {children}
    </ResultJobContext.Provider>
  );
}

ResultJobContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResultJobContext;
