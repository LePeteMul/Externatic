import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import JobCard from "../../components/Elements/JobCard";
import BlackButton from "../../components/Elements/BlackButton";
import { formatDate } from "../../services/formatDate";
import CompanyConnexionContext from "../../contexts/CompanyConnexionContext/CompanyConnexionContext";
import JobOfferContext from "../../contexts/JobOfferContext/JobOfferContext";

function OffersListCompany() {
  const navigate = useNavigate();

  const [result, setResult] = useState([]);
  const { companyId } = useContext(CompanyConnexionContext);
  const { offerId, setOfferId } = useContext(JobOfferContext);

  useEffect(() => {
    const url = `http://localhost:8080/api/offerDetailss/${companyId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.info("Response:", data);
        setResult(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleClick = (id) => {
    setOfferId(id);
    navigate("/company/application");
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/offer/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 204) {
          navigate("/company/offers");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="OffersListCompany">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="OffersListTitle">
          <h1>Offres</h1>
        </div>

        <div className="offer">
          {result.map((offer) => (
            <JobCard
              logo={offer.logo}
              companyName={offer.company_name}
              job={offer.job}
              contractType={offer.contract_type}
              jobCity={offer.city_job}
              date={formatDate(offer.date)}
              id={offer.offer_id}
              onDelete={() => handleDelete(offer.offer_id)}
              onClick={() => handleClick(offer.offer_id)}
            />
          ))}
        </div>
        <div className="returnButton">
          <NavLink to="/company/dashboard">
            <BlackButton buttonName="Retour à mon espace" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default OffersListCompany;
