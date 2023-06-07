
import React from "react";
import JobCard from "../../components/Elements/JobCard";
import HeaderBasic from "../../components/Header/HeaderBasic";

function FavoriteOffers() {
  return (
    <div>
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="titleFavoris">
          <h3>Favoris</h3>
        </div>
        <div className="cardFavoris">
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de project"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de project"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />
          <JobCard
            logo="https://www.moneyvox.fr/i/media/05l/005668l5dd.jpg"
            companyName="Nickel"
            job="Chef de project"
            contractType="CDI"
            jobCity="Nantes"
            date="06/06/2023"
          />
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

export default FavoriteOffers;

