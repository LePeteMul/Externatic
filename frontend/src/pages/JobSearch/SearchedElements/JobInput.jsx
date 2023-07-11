import React, { useContext, useEffect, useState } from "react";
import JobOfferContext from "../../../contexts/JobOfferContext/JobOfferContext";
import UserConnexionContext from "../../../contexts/UserConnexionContext/UserConnexionContext";

function JobInput() {
  const { searchJob, setSearchJob } = useContext(JobOfferContext);
  const { userConnected } = useContext(UserConnexionContext);

  const handleSelect = (event) => {
    setSearchJob(event.target.value);
  };

  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/offer/jobList")
      .then((response) => response.json())
      .then((data) => setJobList(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <select onChange={handleSelect} value={searchJob}>
      <option className="notselected" value="">
        Selectionner un métier
      </option>
      {jobList.map((element) => {
        return (
          <option className="selected" value={element.job} key={element.job}>
            {element.job}
          </option>
        );
      })}
    </select>
  );
}

export default JobInput;
