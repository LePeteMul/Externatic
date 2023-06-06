import React from "react";
import loupe from "../../assets/icons/loupe.png";
import croix from "../../assets/icons/cross.png";

function CandidateCard(profilpicture, lastname, firstname, email) {
  return (
    <div className="candidateCard">
      <ul className="liste">
        <li className="image">
          <img src={profilpicture} alt="image_candidat" />
        </li>
        <div className="info">
          <li>
            {lastname}" "{firstname}
          </li>
          <li>{email}</li>
        </div>
      </ul>
      <div className="navigation">
        <button type="button">
          {" "}
          <img src={croix} alt="croix" />
        </button>
        <button type="button">
          <img src={loupe} alt="loupe" />
        </button>
      </div>
    </div>
  );
}

export default CandidateCard;
