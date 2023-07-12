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

  const [resultVisibility, setResultVisibility] = useState(true);
  const [filterVisibility, setFilterVisibility] = useState(false);
  const handleClickFilters = () => {
    setResultVisibility(!resultVisibility);
    setFilterVisibility(!filterVisibility);
  };

  const { jobOffer, setOfferId } = useContext(JobOfferContext);
  const resultsNumber = jobOffer.length;

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
          <div className="InputList">
            <JobInput />
          </div>
          <div className="InputList">
            <ContractInput />
          </div>
          <div className="InputText">
            <CityInput />
          </div>
        </div>
        <div className="MoreFilters">
          <BlackButton
            buttonName="Plus de filtres"
            buttonFunction={handleClickFilters}
          />
          <h2>
            {resultsNumber} <span>résultats</span>
          </h2>
        </div>
        <div className="JobResults">
          {jobOffer.map((job) => {
            return (
              <div>
                <JobCard
                  logo={job.logo}
                  companyName={job.companyName}
                  job={job.job}
                  contractType={job.contractType}
                  jobCity={job.city_job}
                  date={formatDate(job.date)}
                  key={job.id}
                  id={job.id}
                  onClick={() => handleClick(job.id)}
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
