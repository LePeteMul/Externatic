import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchFilters from "./SearchFilters";
import InputResume from "../../components/Elements/InputResume";
import BlackButton from "../../components/Elements/BlackButton";
import JobCard from "../../components/Elements/JobCard";
import logoGroupama from "../../assets/images/HomePage/logo-groupama.jpg";
import logoAllovoisins from "../../assets/images/HomePage/logo-allovoisins.png";
import logoklaxoon from "../../assets/images/HomePage/logo-klaxoon.jpg";
import logolengow from "../../assets/images/HomePage/logo-lengow.png";
import HeaderBasic from "../../components/Header/HeaderBasic";

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
      id: 1,
      logo: logoGroupama,
      companyName: "Groupama",
      job: "Developpeur Web",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
    {
      id: 2,
      logo: logoAllovoisins,
      companyName: "AlloVoisins",
      job: "Developpeur Web",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
    {
      id: 3,
      logo: logoklaxoon,
      companyName: "Klaxoon",
      job: "Developpeur Web",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
    {
      id: 4,
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
              <NavLink to="/jobdetails">
                <div>
                  <JobCard
                    logo={job.logo}
                    companyName={job.companyName}
                    job={job.job}
                    contractType={job.contractType}
                    jobCity={job.jobCity}
                    date={job.date}
                    key={job.id}
                    id={job.id}
                  />
                </div>
              </NavLink>
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
