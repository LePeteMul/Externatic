import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";
import JobOfferContext from "../../contexts/JobOfferContext/JobOfferContext";
import JobCard from "../../components/Elements/JobCard";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";

function FavoriteOffers() {
  function formatDate(dateSql) {
    const dateObj = new Date(dateSql);
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const newDate = dateObj.toLocaleDateString("fr-FR", options);
    return newDate;
  }

  const navigate = useNavigate();

  const { userId } = useContext(UserConnexionContext);
  const { offerId, setOfferId } = useContext(JobOfferContext);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8080/api/FavoriteByUser/${userId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setFavorites(data))
      .catch((err) => console.error(err));
  }, []);

  const handleClick = (id) => {
    setOfferId(id);
    navigate("/jobdetails");
  };

  const handleDelete = () => {};

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
                date={formatDate(offer.date)}
                id={offer.offer_id}
                onDelete={handleDelete}
                onClick={() => handleClick(offer.offer_id)}
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
