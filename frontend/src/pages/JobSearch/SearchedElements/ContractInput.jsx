import React, { useContext, useEffect, useState } from "react";
import JobOfferContext from "../../../contexts/JobOfferContext/JobOfferContext";

function ContractInput() {
  const { searchContract, setSearchContract, setSearchContractId } =
    useContext(JobOfferContext);

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    const selectedContract = contractList.find(
      (element) => element.contract_type === selectedValue
    );
    setSearchContract(selectedValue);
    setSearchContractId(selectedContract ? selectedContract.id : "");
  };

  const [contractList, setContractList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/contract")
      .then((response) => response.json())
      .then((data) => setContractList(data))
      .catch((err) => console.error(err));
  }, []);

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
