import React, { useContext } from "react";
import SearchContractContext from "../../../contexts/SearchContractContext/SearchContractContext";

function ContractInput() {
  const { searchContract, setSearchContract } = useContext(
    SearchContractContext
  );

  const handleSelect = (event) => {
    setSearchContract(event.target.value);
  };

  const contractList = [
    { value: "CDI", name: "CDI" },
    { value: "CDD", name: "CDD" },
    { value: "Stage", name: "Stage" },
  ];

  return (
    <select onChange={handleSelect} value={searchContract}>
      <option className="notselected" value="">
        Selectionner un contrat
      </option>
      {contractList.map((element) => {
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

export default ContractInput;
