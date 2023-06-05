import React from "react";
import nickel from "../../assets/images/HomePage/logo-nickel.png";

// test test
function JobCard() {
  return (
    <div>
      <div className="jobCard">
        <div className="company_logo">
          <img className="logo" src={nickel} alt="" />
        </div>
        <div className="job_details">
          <h2 className="job_title">Service Delivery Manager</h2>
          <h3 className="contractLocation">CDI | Bordeaux</h3>
          <h3 className="publication">offre publiée le 31/05/2023</h3>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
