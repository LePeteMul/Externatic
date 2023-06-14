import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import JobCard from "../../components/Elements/JobCard";
import BlackButton from "../../components/Elements/BlackButton";

function CandidateJobApplications() {
  return (
    <div className="jobapplications">
      <HeaderBasic />

      <div className="boxWithoutHeader">
        <div className="titleMesCandidature">
          <h1>Mes candidatures</h1>
        </div>
        <div className="applicationDetails">
          <div className="recu">
            <p>Reçue(s)</p>
            <JobCard
              logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
              companyName="Nickel"
              job="Chef de project"
              contractType="CDI"
              jobCity="Nantes"
              date="06/06/2023"
            />
          </div>
          <div className="enCours">
            <p>En cours de traitement</p>
            <JobCard
              logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
              companyName="Nickel"
              job="Chef de project"
              contractType="CDI"
              jobCity="Nantes"
              date="06/06/2023"
            />
          </div>

          <div className="entretienPlanifie">
            <p>Entretien(s) planifié(s)</p>
            <JobCard
              logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
              companyName="Nickel"
              job="Chef de project"
              contractType="CDI"
              jobCity="Nantes"
              date="06/06/2023"
            />
          </div>

          <div className="accepte">
            <p>Acceptée(s)</p>

            <JobCard
              logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
              companyName="Nickel"
              job="Chef de project"
              contractType="CDI"
              jobCity="Nantes"
              date="06/06/2023"
            />
          </div>

          <div className="refuse">
            <p>Refusée(s)</p>

            <JobCard
              logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
              companyName="Nickel"
              job="Chef de project"
              contractType="CDI"
              jobCity="Nantes"
              date="06/06/2023"
            />
          </div>
        </div>
        <div className="jobapplicationsEnd">
          <NavLink to="/candidate/dashboard">
            <BlackButton buttonName="Retour à mon espace" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CandidateJobApplications;
