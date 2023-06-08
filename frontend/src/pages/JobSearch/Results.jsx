import React, { useState } from "react";
import SearchFilters from "./SearchFilters";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputResume from "../../components/Elements/InputResume";
import BlackButton from "../../components/Elements/BlackButton";
import JobCard from "../../components/Elements/JobCard";
import logoGroupama from "../../assets/images/HomePage/logo-groupama.jpg";
import logoAllovoisins from "../../assets/images/HomePage/logo-allovoisins.png";
import logoklaxoon from "../../assets/images/HomePage/logo-klaxoon.jpg";
import logolengow from "../../assets/images/HomePage/logo-lengow.png";

function Results() {
  const [resultVisibility, setResultVisibility] = useState(true);
  const [filterVisibility, setFilterVisibility] = useState(false);
  const handleClickFilters = () => {
    setResultVisibility(!resultVisibility);
    setFilterVisibility(!filterVisibility);
  };

  const resultsNumber = 56;

  const jobs = [
    {
      logo: logoGroupama,
      companyName: "Groupama",
      job: "Developpeur Web",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
    {
      logo: logoAllovoisins,
      companyName: "AlloVoisins",
      job: "Developpeur Web",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
    {
      logo: logoklaxoon,
      companyName: "Klaxoon",
      job: "Developpeur Web",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
    {
      logo: logolengow,
      companyName: "Lengow",
      job: "Developpeur Web",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
  ];

  return (
    <div className="Results">
      <HeaderBasic />
      <div
        className={`boxWithoutHeader2 ${
          resultVisibility ? "visible" : "hidden"
        }`}
      >
        <div className="SearchResume">
          <InputResume />
          <InputResume />
          <InputResume />
        </div>
        <div className="MoreFilters">
          <BlackButton
            buttonName="Plus de filtres"
            buttonFunction={handleClickFilters}
          />
          <h2>
            {resultsNumber} <span>résulats</span>
          </h2>
        </div>
        <div className="JobResults">
          {jobs.map((job) => {
            return (
              <div>
                <JobCard
                  logo={job.logo}
                  companyName={job.companyName}
                  job={job.job}
                  contractType={job.contractType}
                  jobCity={job.jobCity}
                  date={job.date}
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
