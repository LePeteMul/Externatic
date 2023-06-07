import React from "react";
import PropTypes from "prop-types";
import InputResume from "../../components/Elements/InputResume";
import BlackButton from "../../components/Elements/BlackButton";
import JobCard from "../../components/Elements/JobCard";

function Results({ handleClickFilters }) {
  const resultsNumber = 56;

  const jobs = [
    {
      logo: "./../../assets/images/HomePage/logo-groupama.jpg",
      companyName: "Groupama",
      job: "Developpeur Web",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
    {
      logo: "./../../assets/images/HomePage/logo-allovoisins.jpg",
      companyName: "AlloVoisins",
      job: "Developpeur Web",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
    {
      logo: "./../../assets/images/HomePage/logo-klaxoon.jpg",
      companyName: "Klaxoon",
      job: "Developpeur Web",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
    {
      logo: "./../../assets/images/HomePage/logo-lengow.jpg",
      companyName: "Lengow",
      job: "Developpeur Web",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
    },
  ];

  return (
    <>
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
            <JobCard
              logo={job.logo}
              companyName={job.companyName}
              job={job.job}
              contractType={job.contractType}
              jobCity={job.jobCity}
              date={job.date}
            />
          );
        })}
      </div>
    </>
  );
}

Results.propTypes = {
  handleClickFilters: PropTypes.func.isRequired,
};

export default Results;
