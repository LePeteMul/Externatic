import React, { useContext, useEffect, useState } from "react";
import JobOfferContext from "../../../contexts/JobOfferContext/JobOfferContext";

function ContractInput() {
  const { searchContract, setSearchContract, setSearchContractId } =
    useContext(JobOfferContext);
  const contractLS = localStorage.getItem("contract");

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    const selectedContract = contractList.find(
      (element) => element.contract_type === selectedValue
    );
    setSearchContract(selectedValue);
    setSearchContractId(selectedContract ? selectedContract.id : "");
    localStorage.setItem("contract", selectedValue);
  };

  const [contractList, setContractList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contract`)
      .then((response) => response.json())
      .then((data) => setContractList(data))
      .catch((err) => console.error(err));
  }, []);
  // ainsi, le contract list est utilisé pour le map

  return (
    <select onChange={handleSelect} value={contractLS || searchContract}>
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
