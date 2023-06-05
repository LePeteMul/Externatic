import React from "react";
import testImage from "../../assets/images/image_test.png";
import loupe from "../../assets/icons/loupe.png";
import croix from "../../assets/icons/cross.png";

function CandidateCard() {
  return (
    <div className="candidateCard">
      <ul className="liste">
        <li className="image">
          <img src={testImage} alt="image_candidat" />
        </li>
        <div className="info">
          <li>Marie Dupont</li>
          <li>marie.dupont@gmail.com</li>
        </div>
      </ul>
      <div className="navigation">
        <img src={croix} alt="croix" />
        <img src={loupe} alt="loupe" />
      </div>
    </div>
  );
}

export default CandidateCard;
