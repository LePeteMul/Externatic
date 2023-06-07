import React, { useState } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import YourSearch from "./YourSearch";
import Results from "./Results";
import SearchFilters from "./SearchFilters";

function JobSearch() {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setCount((c) => c + 1);
  };

  const [resultVisibility, setResultVisibility] = useState(true);
  const [filterVisibility, setFilterVisibility] = useState(false);
  const handleClickFilters = () => {
    setResultVisibility(!resultVisibility);
    setFilterVisibility(!filterVisibility);
  };

  return (
    <div className="JobSearch">
      <HeaderBasic />
      {count < 4 && (
        <div className="boxWithoutHeader">
          <YourSearch count={count} handleClick={handleClick} />
        </div>
      )}
      {count < 4 || (
        <div
          className={`boxWithoutHeader2 ${
            resultVisibility ? "visible" : "hidden"
          }`}
        >
          <Results handleClickFilters={handleClickFilters} />
        </div>
      )}
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

export default JobSearch;
