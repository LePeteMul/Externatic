import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputList from "../../components/Elements/InputList";
import Textearea from "../../components/Elements/Textearea";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";
import InputText from "../../components/Elements/InputText";

function OfferCreation() {
  const [posted, setPosted] = useState(false);

  const handlePosted = () => {
    setPosted(true);
  };

  return (
    <div className="offer_creation">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        {!posted && (
          <div>
            <div className="page_title">
              <h1>Nouvelle offre</h1>
            </div>

            <div className="offerinputs">
              <InputList
                label="Poste"
                inputMessage="Selectionner un métier"
                data={[
                  { value: "metier1", name: "Metier n°1" },
                  { value: "metier2", name: "Metier n°2" },
                  { value: "metier3", name: "Metier n°3" },
                ]}
              />

              <InputList
                label="Type de contrat"
                inputMessage="Selectionner un contrat"
                data={[
                  { value: "CDI", name: "CDI" },
                  { value: "CDD", name: "CDD" },
                  { value: "Stage", name: "Stage" },
                ]}
              />
              <InputText label="Salaire annuel brut min" inputMessage="" />
              <InputText label="Salaire annuel brut max" inputMessage="" />
              <Textearea
                label="Missions du poste"
                inputMessage="Yes"
                rows={3}
              />

              <InputList
                label="Localisation"
                inputMessage="Selectionner la ville"
                data={[
                  { value: "Nantes", name: "Nantes" },
                  { value: "Paris", name: "Paris" },
                  { value: "Toulouse", name: "Toulouse" },
                ]}
              />

              <InputList
                label="Télétravail"
                inputMessage="Selectionner un mode de télétravail"
                data={[
                  { value: "Total", name: "Total" },
                  { value: "Partiel", name: "Partiel" },
                  { value: "Pas disponible", name: "Pas disponible" },
                ]}
              />

              <Textearea label="Soft Skills" inputMessage="Yes" rows={9} />

              <Textearea label="Hard Skills" inputMessage="Yes" rows={9} />

              <div className="offerEnd">
                <BlackButton
                  buttonName="Ajouter cette offre"
                  buttonFunction={handlePosted}
                />
              </div>
            </div>
          </div>
        )}

        {posted && (
          <div>
            <div className="confOfferCreation">
              <h2>L'offre d'emploi a bien été publiée</h2>
            </div>
            <div className="confOfferCreation">
              <NavLink to="/company/dashboard">
                <WhiteButton buttonName="Retour à mon espace" />
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OfferCreation;
