import React, { useContext } from "react";
import SearchJobContext from "../../../contexts/SearchJobContext/SearchJobContext";

function JobInput() {
  const { searchJob, setSearchJob } = useContext(SearchJobContext);

  const handleSelect = (event) => {
    setSearchJob(event.target.value);
  };

  const jobList = [
    { value: "metier1", name: "Developpeur Web" },
    { value: "metier2", name: "Data Analyst" },
    { value: "metier3", name: "UX Designer" },
  ];

  return (
    <select onChange={handleSelect} value={searchJob}>
      <option className="notselected" value="">
        Selectionner un métier
      </option>
      {jobList.map((element) => {
        return (
          <option
            className="selected"
            value={element.value}
            key={element.value}
          >
            {element.name}
          </option>
        );
      })}
    </select>
  );
}

export default JobInput;
