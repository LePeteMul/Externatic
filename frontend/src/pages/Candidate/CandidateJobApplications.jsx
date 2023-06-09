import React from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import JobCard from "../../components/Elements/JobCard";

function CandidateJobApplications() {
  return (
    <div className="jobapplications">
      <HeaderBasic />

      <div className="boxWithoutHeader">
        <div className="titleMesCandidature">
          <h3>Mes candidatures</h3>
        </div>

        <div className="recu">
          <p>Reçue(s)</p>
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de project"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />{" "}
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de project"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />
        </div>

        <div className="EnCours">
          <p>En cours de traitement</p>
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de project"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />{" "}
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de project"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />
        </div>

        <div className="entretienPlanifié">
          <p>Entretien(s) planifié(s)</p>
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de project"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />{" "}
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de project"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />
        </div>

        <div className="accepté">
          <p>Acceptée(s)</p>
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de project"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />{" "}
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de project"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />
        </div>

        <div className="refusé">
          <p>Refusée(s)</p>
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de project"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />{" "}
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
    </div>
  );
}

export default CandidateJobApplications;
