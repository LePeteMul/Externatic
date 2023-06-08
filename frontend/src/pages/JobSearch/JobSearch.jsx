import React, { useState } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import YourSearch from "./YourSearch";
import Results from "./Results";

function JobSearch() {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="JobSearch">
      {count < 4 && (
        <>
          <HeaderBasic />
          <div className="boxWithoutHeader">
            <YourSearch count={count} handleClick={handleClick} />
          </div>
        </>
      )}
      {count < 4 || <Results />}
    </div>
  );
}

export default JobSearch;
