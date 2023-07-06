import React, { useContext, useEffect, useState } from "react";
import JobOfferContext from "../../../contexts/JobOfferContext/JobOfferContext";

function ContractInput() {
  const { searchContract, setSearchContract } = useContext(JobOfferContext);

  const handleSelect = (event) => {
    setSearchContract(event.target.value);
  };

  const [contractList, setContractList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/contract")
      .then((response) => response.json())
      .then((data) => setContractList(data))
      .catch((err) => console.error(err));
  }, []);
  // ainsi, le contract list est utilisé pour le map

  return (
    <select onChange={handleSelect} value={searchContract}>
      <option className="notselected" value="">
        Selectionner un contrat
      </option>
      {contractList.map((element) => {
        return (
          <option
            className="selected"
            value={element.contract_type}
            key={element.id}
          >
            {element.contract_type}
          </option>
        );
      })}
    </select>
  );
}

export default ContractInput;
