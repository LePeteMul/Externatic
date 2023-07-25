import React, { useContext } from "react";
import JobOfferContext from "../../../contexts/JobOfferContext/JobOfferContext";

function JobInput() {
  const { searchJob, setSearchJob } = useContext(JobOfferContext);
  const jobLS = localStorage.getItem("job");

  const handleChangeInput = (event) => {
    setSearchJob(event.target.value);
    localStorage.setItem("job", event.target.value);
  };

  return (
    <input
      className="selected"
      type="text"
      value={jobLS || searchJob}
      placeholder="Entrer le métier"
      onChange={handleChangeInput}
    />
  );
}

export default JobInput;
