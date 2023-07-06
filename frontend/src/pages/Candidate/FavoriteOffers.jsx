import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";
import JobCard from "../../components/Elements/JobCard";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";

function FavoriteOffers() {
  const { userId } = useContext(UserConnexionContext);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8080/api/FavoriteByUser/${userId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setFavorites(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="favoriteOffers">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="titleFavoris">
          <h1>Mes favoris</h1>
        </div>
        <div className="cardFavoris">
          {favorites.map((offer) => {
            return (
              <JobCard
                logo={offer.logo}
                companyName={offer.companyName}
                job={offer.job}
                contractType={offer.contract_type}
                jobCity={offer.city_job}
                date={offer.date}
              />
            );
          })}
        </div>
        <div className="favoriteEnd">
          <NavLink to="/candidate/dashboard">
            <BlackButton buttonName="Retour à mon espace" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default FavoriteOffers;
