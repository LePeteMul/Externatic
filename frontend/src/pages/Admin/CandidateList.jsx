import React from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import CandidateCard from "../../components/Elements/CandidateCard";
import userlogo from "../../assets/icons/user.png";

function CandidateList() {
  return (
    <div className="CandidateList">
      <HeaderBasic />

      <div className="boxWithoutHeader">
        <div className="page_title">
          <h1>Candidats</h1>
        </div>

        <div className="candidate">
          <CandidateCard
            profilpicture={userlogo}
            lastname="Dupont"
            firstname="Marie"
            email="marie.dupont@gmail.com"
          />
        </div>
        <br />
        <br />

        <div className="candidate">
          <CandidateCard
            profilpicture={userlogo}
            lastname="Dupont"
            firstname="Marie"
            email="marie.dupont@gmail.com"
          />
        </div>
        <br />
        <br />

        <div className="candidate">
          <CandidateCard
            profilpicture={userlogo}
            lastname="Dupont"
            firstname="Marie"
            email="marie.dupont@gmail.com"
          />
        </div>
        <br />
        <br />

        <div className="candidate">
          <CandidateCard
            profilpicture={userlogo}
            lastname="Dupont"
            firstname="Marie"
            email="marie.dupont@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}

export default CandidateList;
