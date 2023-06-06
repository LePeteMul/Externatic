import React from "react";
import PropTypes from "prop-types";
import "./DashboardCard.scss";

const profil = (
  <svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 448 512">
    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
    <linearGradient id="gradientColor">
      <stop offset="5%" stopColor="#7eaaff" />
      <stop offset="95%" stopColor="#ff48fb" />
    </linearGradient>
  </svg>
);
const favoris = (
  <svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 512 512">
    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
    <linearGradient id="gradientColor">
      <stop offset="5%" stopColor="#7eaaff" />
      <stop offset="95%" stopColor="#ff48fb" />
    </linearGradient>
  </svg>
);
const recherche = (
  <svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 512 512">
    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    <linearGradient id="gradientColor">
      <stop offset="5%" stopColor="#7eaaff" />
      <stop offset="95%" stopColor="#ff48fb" />
    </linearGradient>
  </svg>
);
const candidatures = (
  <svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 576 512">
    <path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
    <linearGradient id="gradientColor">
      <stop offset="5%" stopColor="#7eaaff" />
      <stop offset="95%" stopColor="#ff48fb" />
    </linearGradient>
  </svg>
);
const addEntreprise = (
  <svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 448 512">
    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
    <linearGradient id="gradientColor">
      <stop offset="5%" stopColor="#7eaaff" />
      <stop offset="95%" stopColor="#ff48fb" />
    </linearGradient>
  </svg>
);

const gestionEntreprise = (
  <svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 512 512">
    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
    <linearGradient id="gradientColor">
      <stop offset="5%" stopColor="#7eaaff" />
      <stop offset="95%" stopColor="#ff48fb" />
    </linearGradient>
  </svg>
);
const gestionUsers = (
  <svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 576 512">
    <path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
    <linearGradient id="gradientColor">
      <stop offset="5%" stopColor="#7eaaff" />
      <stop offset="95%" stopColor="#ff48fb" />
    </linearGradient>
  </svg>
);
const gestionOffres = (
  <svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 576 512">
    <path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
    <linearGradient id="gradientColor">
      <stop offset="5%" stopColor="#7eaaff" />
      <stop offset="95%" stopColor="#ff48fb" />
    </linearGradient>
  </svg>
);
const profilEmployeur = (
  <svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 576 512">
    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    <linearGradient id="gradientColor">
      <stop offset="5%" stopColor="#7eaaff" />
      <stop offset="95%" stopColor="#ff48fb" />
    </linearGradient>
  </svg>
);
const presentationEntreprise = (
  <svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 512 512">
    <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
    <linearGradient id="gradientColor">
      <stop offset="5%" stopColor="#7eaaff" />
      <stop offset="95%" stopColor="#ff48fb" />
    </linearGradient>
  </svg>
);
function getIcon(title) {
  switch (title) {
    case "Mon profil":
      return profil;

    case "Favoris":
      return favoris;

    case "Ma recherche":
      return recherche;

    case "Mes candidatures":
      return candidatures;

    case "Gestion des utilisateurs":
      return gestionUsers;

    case "Gestion des offres d'emploi":
      return gestionOffres;

    case "Mon profil Employeur":
      return profilEmployeur;

    case "Présentation de l’entreprise":
      return presentationEntreprise;

    case "Gestion des offres et candidatures":
      return candidatures;

    case "Créer une entreprise":
      return addEntreprise;

    case "Gestion des entreprises":
      return gestionEntreprise;

    default:
      return profil;
  }
}

function DashboardCard({ title, description }) {
  const goodIcon = getIcon(title);
  return (
    <div className="container">
      <div className="card">
        <style />
        <div className="icon">{goodIcon}</div>
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
