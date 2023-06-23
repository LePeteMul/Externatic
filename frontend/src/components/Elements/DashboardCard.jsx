import React from "react";
// eslint-disable-next-line import/no-duplicates
import PropTypes from "prop-types";

function DashboardCard({ title, description }) {
  const getBackgroundClass = (FinalTitle) => {
    switch (FinalTitle) {
      // ADMIN SECTION

      case "Mon profil":
        return "background-image-1";

      case "Créer une entreprise":
        return "background-image-2";

      case "Gestion des entreprises":
        return "background-image-3";

      case "Gestion des offres d'emploi":
        return "background-image-4";

      case "Gestion des utilisateurs":
        return "background-image-5";

      // PRO SECTION

      case "Mon profil employeur":
        return "background-image-6";
      case "Présentation de l’entreprise":
        return "background-image-7";
      case "Gestion des offres et candidatures":
        return "background-image-8";
      case "Créer une offre d’emploi":
        return "background-image-9";

      // USER SECTION

      case "Favoris":
        return "background-image-10";
      case "Ma recherche":
        return "background-image-11";
      case "Mes candidatures":
        return "background-image-12";
      default:
        return "";
    }
  };

  const backgroundClass = getBackgroundClass(title);

  return (
    <div className="container">
      <div className={`card ${backgroundClass}`} role="button" tabIndex={0}>
        <p className="title">{title}</p>
        <p className="text">{description}</p>
      </div>
    </div>
  );
}

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DashboardCard;
