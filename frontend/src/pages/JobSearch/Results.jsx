import React from "react";
import PropTypes from "prop-types";
import InputResume from "../../components/Elements/InputResume";
import BlackButton from "../../components/Elements/BlackButton";
import JobCard from "../../components/Elements/JobCard";
import logoGroupama from "../../assets/images/HomePage/logo-groupama.jpg";
import logoAllovoisins from "../../assets/images/HomePage/logo-allovoisins.png";
import logoklaxoon from "../../assets/images/HomePage/logo-klaxoon.jpg";
import logolengow from "../../assets/images/HomePage/logo-lengow.png";

function Results({ handleClickFilters }) {
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
    </>
  );
}

Results.propTypes = {
  handleClickFilters: PropTypes.func.isRequired,
};

export default Results;
