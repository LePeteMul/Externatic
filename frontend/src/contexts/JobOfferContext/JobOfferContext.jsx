import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

const JobOfferContext = createContext();

export function JobOfferContextProvider({ children }) {
  const [searchCity, setSearchCity] = useState("");
  const [searchContract, setSearchContract] = useState("");
  const [searchContractId, setSearchContractId] = useState("");
  const [searchJob, setSearchJob] = useState("");
  const [offerId, setOfferId] = useState("");

  const [jobOffer, setJobOffer] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams({
      job: searchJob,
      contract: searchContractId,
      city: searchCity,
    }).toString();
    const url = `http://localhost:8080/api/offerByCriteria?${queryParams}`;

    console.info(url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => setJobOffer(data))
      .catch((err) => console.error(err));
  }, [searchCity, searchContract, searchJob]);

  const JobOfferContextProviderValue = useMemo(
    () => ({
      jobOffer,
      setJobOffer,
      searchCity,
      setSearchCity,
      searchContract,
      setSearchContract,
      searchJob,
      setSearchJob,
      searchContractId,
      setSearchContractId,
      offerId,
      setOfferId,
    }),
    [
      jobOffer,
      setJobOffer,
      searchCity,
      setSearchCity,
      searchContract,
      setSearchContract,
      searchJob,
      setSearchJob,
      searchContractId,
      setSearchContractId,
      offerId,
      setOfferId,
    ]
  );

  return (
    <JobOfferContext.Provider value={JobOfferContextProviderValue}>
      {children}
    </JobOfferContext.Provider>
  );
}

JobOfferContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default JobOfferContext;
