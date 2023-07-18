import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CityInput from "./SearchedElements/CityInput";
import ContractInput from "./SearchedElements/ContractInput";
import JobInput from "./SearchedElements/JobInput";
import SearchFilters from "./SearchFilters";
import BlackButton from "../../components/Elements/BlackButton";
import JobCard from "../../components/Elements/JobCard";
import HeaderBasic from "../../components/Header/HeaderBasic";
import JobOfferContext from "../../contexts/JobOfferContext/JobOfferContext";
import { formatDate } from "../../services/formatDate";

function Results() {
  const navigate = useNavigate();
  const {
    jobOffer,
    setOfferId,
    selectedRemote,
    selectedTechno,
    mensualSalary,
  } = useContext(JobOfferContext);
  const annualSalary = mensualSalary * 12;

  const resultsNumber = jobOffer
    .filter((job) => selectedRemote === "" || job.remote === selectedRemote)
    .filter(
      (job) => selectedTechno === "" || job.techno_name === selectedTechno
    )
    .filter((job) => annualSalary <= job.min_salary).length;

  const [resultVisibility, setResultVisibility] = useState(true);
  const [filterVisibility, setFilterVisibility] = useState(false);
  const handleClickFilters = () => {
    setResultVisibility(!resultVisibility);
    setFilterVisibility(!filterVisibility);
  };

  const handleClick = (jobId) => {
    setOfferId(jobId);
    navigate("/jobdetails");
  };

  return (
    <div className="Results">
      <HeaderBasic />
      <div
        className={`boxWithoutHeader2 ${
          resultVisibility ? "visible" : "hidden"
        }`}
      >
        <div className="SearchResume">
          <div className="InputText">
            <JobInput />
          </div>
          <div className="InputList">
            <ContractInput />
          </div>
          <div className="InputList">
            <CityInput />
          </div>
        </div>
        <div className="MoreFilters">
          <BlackButton
            buttonName="Plus de filtres"
            buttonFunction={handleClickFilters}
          />
          <h2>
            {resultsNumber === 0 ? (
              <span>Aucun résultat</span>
            ) : (
              <>
                {resultsNumber}{" "}
                <span>résultat{resultsNumber > 1 ? "s" : ""}</span>
              </>
            )}
          </h2>
        </div>

        <div className="JobResults">
          {jobOffer
            .filter(
              (job) => selectedRemote === "" || job.remote === selectedRemote
            )
            .filter(
              (job) =>
                selectedTechno === "" || job.techno_name === selectedTechno
            )
            .filter((job) => annualSalary <= job.min_salary)
            .map((job) => {
              return (
                <div>
                  <JobCard
                    logo={job.logo}
                    companyName={job.companyName}
                    job={job.job}
                    contractType={job.contract_type}
                    jobCity={job.city_job}
                    date={formatDate(job.date)}
                    key={job.id}
                    id={job.id}
                    onClick={() => handleClick(job.id)}
                    showButtons={false}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div
        className={`boxWithoutHeader ${
          filterVisibility ? "visible" : "hidden"
        }`}
      >
        <SearchFilters handleClickFilters={handleClickFilters} />
      </div>
    </div>
  );
}

export default Results;
