import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

const JobOfferContext = createContext();

export function JobOfferContextProvider({ children }) {
  const [jobOffer, setJobOffer] = useState([]);

  const [formData, setFormData] = useState({
    job: "all",
    contract: "all",
    city: "all",
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(formData).toString();
    const url = `http://localhost:8080/api/offerByCriteria?${queryParams}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setJobOffer(data))
      .catch((err) => console.error(err));
  }, []);

  /*
      id: 1,
      logo: logoGroupama,
      companyName: "Groupama",
      job: "Developpeur Web",
      contractType: "CDI",
      jobCity: "Nantes",
      date: "06/06/2023",
      companyDescription:
        "Située en centre-ville de Nantes (gare sud) cette société conçoit depuis +10 ans des applications web & mobile. Elle réalise également de nombreux projets d'innovation (AR / VR par exemple). Les équipes de cette agence (30 pers.) possèdent des expertises variées : UX / dev / projet / électronique / etc. Le positionnement plait énormément en interne (peu de turnover) et en externe (forte croissance). Constituée de passionnés : ingénieurs embarqués, développeurs en nouvelles technologies leur équipe agile peut ainsi répondre à tous les besoins en stratégie de déploiement et technologies émergentes. Un vrai lieu de vie où les personnalités et les compétences se croisent pour former une équipe soudée. Aimer son travail est la philosophie de cette entreprise.",
      jobDescription:
        "En lien avec le directeur technique, les chefs de projets et vos collègues développeur : Analyse technique des besoinsArchitecture, conception et développement d’applications web essentiellement (plus ponctuellement il est possible d'intervenir sur des projets mobile / AR / VR / etc.) Tests (unitaires et fonctionnels) Veille technologique.",
      offerTechno:
        "Java Springboot, Nodejs, Typescript Angular 8, React, API Rest, PostgreSQL",
      prerequisites:
        "Esprit d'équipe, collaboratif. Autonomie et propositions entendues",
      remote: "partiel",
      min_income: 39000,
      max_income: 50000,
*/

  const JobOfferContextProviderValue = useMemo(
    () => ({ jobOffer, setJobOffer }),
    [jobOffer, setJobOffer]
  );

  return (
    <JobOfferContext.Provider value={JobOfferContextProviderValue}>
      {children}
    </JobOfferContext.Provider>
  );
}

JobOfferContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default JobOfferContext;
