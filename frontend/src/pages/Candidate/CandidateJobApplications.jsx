import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import JobOfferContext from "../../contexts/JobOfferContext/JobOfferContext";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";
import HeaderBasic from "../../components/Header/HeaderBasic";
import JobCard from "../../components/Elements/JobCard";
import BlackButton from "../../components/Elements/BlackButton";
import { formatDate } from "../../services/formatDate";

function CandidateJobApplications() {
  const navigate = useNavigate();
  const [application, setApplication] = useState([]);
  const { userId } = useContext(UserConnexionContext);
  const { offerId, setOfferId } = useContext(JobOfferContext);

  useEffect(() => {
    const url = `http://localhost:8080/api/applicationByUser/${userId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setApplication(data);
      })

      .catch((err) => console.error(err));
  }, []);

  const handleClick = (id) => {
    setOfferId(id);
    navigate("/jobdetails");
  };
  const handleDelete = () => {};
  // Filtrer les candidatures pour éviter les doublons
  const filterApplications = application.reduce((acc, curr) => {
    const isDuplicate = acc.find((app) => app.offer_id === curr.offer_id);
    if (!isDuplicate) {
      acc.push(curr);
    }
    return acc;
  }, []);

  // Filtrer les offres en fonction de leur statut

  const enCoursDeTraitement = filterApplications.filter(
    (offer) => offer.status_name === "En cours de traitement"
  );
  const entretiensProgrammes = filterApplications.filter(
    (offer) => offer.status_name === "Entretien planifié"
  );
  const acceptees = filterApplications.filter(
    (offer) => offer.status_name === "Accepté"
  );
  const refusees = filterApplications.filter(
    (offer) => offer.status_name === "Refusé"
  );
  return (
    <div className="jobapplications">
      <HeaderBasic />

      <div className="boxWithoutHeader">
        <div className="titleMesCandidature">
          <h1>Mes candidatures</h1>
        </div>
        <div className="applicationDetails">
          <div className="recu">
            <p>En cours de traitement</p>
            {enCoursDeTraitement.map((offer) => (
              <JobCard
                key={offer.offer_id}
                logo={offer.logo}
                companyName={offer.companyName}
                job={offer.job}
                contractType={offer.contract_type}
                jobCity={offer.city_job}
                date={formatDate(offer.date)}
                status={offer.status}
                onClick={() => handleClick(offer.offer_id)}
                onDelete={handleDelete}
              />
            ))}
          </div>

          <div className="entretienPlanifie">
            <p>Entretien(s) planifié(s)</p>
            {entretiensProgrammes.map((offer) => (
              <JobCard
                key={offer.offer_id}
                logo={offer.companyLogo}
                companyName={offer.companyName}
                job={offer.job}
                contractType={offer.contract_type}
                jobCity={offer.city_job}
                date={formatDate(offer.date)}
                status={offer.status}
                onClick={() => handleClick(offer.offer_id)}
                onDelete={handleDelete}
              />
            ))}
          </div>

          <div className="accepte">
            <p>Acceptée(s)</p>
            {acceptees.map((offer) => (
              <JobCard
                key={offer.offer_id}
                logo={offer.companyLogo}
                companyName={offer.companyName}
                job={offer.job}
                contractType={offer.contract_type}
                jobCity={offer.city_job}
                date={formatDate(offer.date)}
                status={offer.status}
                onClick={() => handleClick(offer.offer_id)}
                onDelete={handleDelete}
              />
            ))}
          </div>

          <div className="refuse">
            <p>Refusée(s)</p>
            {refusees.map((offer) => (
              <JobCard
                key={offer.offer_id}
                logo={offer.companyLogo}
                companyName={offer.companyName}
                job={offer.job}
                contractType={offer.contract_type}
                jobCity={offer.city_job}
                date={formatDate(offer.date)}
                status={offer.status}
                onClick={() => handleClick(offer.offer_id)}
                onDelete={handleDelete}
              />
            ))}
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
