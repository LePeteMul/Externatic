import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";
import JobOfferContext from "../../contexts/JobOfferContext/JobOfferContext";
import JobCard from "../../components/Elements/JobCard";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";
import { formatDate } from "../../services/formatDate";

function FavoriteOffers() {
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

  const handleDelete = (id) => {
    setOfferId(id);

    fetch(`http://localhost:8080/api/favorite/${userId}/${offerId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 204) {
          navigate("/candidate/favorite");
        }
      })
      .catch((err) => console.error(err));
  };

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
                key={offer.offer_id}
                onDelete={() => handleDelete(offer.offer_id)}
                onClick={() => handleClick(offer.offer_id)}
                showButtons
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
