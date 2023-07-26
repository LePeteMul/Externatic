import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import JobOfferContext from "../../contexts/JobOfferContext/JobOfferContext";
import HeaderBasic from "../../components/Header/HeaderBasic";
import JobCard from "../../components/Elements/JobCard";
import BlackButton from "../../components/Elements/BlackButton";
import { formatDate } from "../../services/formatDate";

function OffersList() {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const [result, setResult] = useState([]);

  const { setOfferId } = useContext(JobOfferContext);

  // find all offers with details
  useEffect(() => {
    const url = "http://localhost:8080/api/offer";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleClick = (id) => {
    setOfferId(id);
    navigate("/jobdetails");
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/offer/${id}`, {
      method: "DELETE",
      Authorization: `Bearer ${token}`,
    })
      .then((response) => {
        if (response.status === 204) {
          navigate("/admin/offerlist");
        } else {
          console.info("");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="OffersList">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="OffersListTitle">
          <h1>Offres</h1>
        </div>

        <div className="offer">
          {result.map((offer) => {
            return (
              <JobCard
                logo={offer.logo}
                companyName={offer.company_name}
                job={offer.job}
                contractType={offer.contract_type}
                jobCity={offer.city_job}
                date={formatDate(offer.date)}
                id={offer.id}
                key={offer.id}
                onDelete={() => handleDelete(offer.id)}
                onClick={() => handleClick(offer.id)}
                showButtons
              />
            );
          })}
        </div>
        <div className="returnButton">
          <NavLink to="/admin/dashboard">
            <BlackButton buttonName="Retour à l'administration" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default OffersList;
