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

  /* Filtres Front supplémentaires */
  const [selectedRemote, setSelectedRemote] = useState("");
  const [selectedTechno, setSelectedTechno] = useState("");
  const [mensualSalary, setMensualSalary] = useState(1500);

  useEffect(() => {
    const queryParams = new URLSearchParams({
      job: searchJob,
      contract: searchContractId,
      city: searchCity,
    }).toString();
    const url = `http://localhost:8080/api/offerByCriteria?${queryParams}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        setJobOffer(data);
      })
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
      selectedRemote,
      setSelectedRemote,
      selectedTechno,
      setSelectedTechno,
      mensualSalary,
      setMensualSalary,
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
      selectedRemote,
      setSelectedRemote,
      selectedTechno,
      setSelectedTechno,
      mensualSalary,
      setMensualSalary,
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
