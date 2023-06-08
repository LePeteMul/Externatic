import React, { useState } from "react";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputList from "../../components/Elements/InputList";
import Textearea from "../../components/Elements/Textearea";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";

function OfferCreation() {
  const [posted, setPosted] = useState(false);

  const handlePosted = () => {
    setPosted(true);
  };

  return (
    <>
      <HeaderBasic />
      <div className="offer_creation">
        {!posted && (
          <div>
            <div className="page_title">
              <h1>Nouvelle offre</h1>
            </div>

            <div className="offerinputs">
              <InputList
                label="Je recherche un poste de"
                inputMessage="Selectionner un métier"
                data={[
                  { value: "metier1", name: "Metier n°1" },
                  { value: "metier2", name: "Metier n°2" },
                  { value: "metier3", name: "Metier n°3" },
                ]}
              />

              <InputList
                label="Type de contrat"
                inputMessage="Selectionner un métier"
                data={[
                  { value: "CDI", name: "CDI" },
                  { value: "CDD", name: "CDD" },
                  { value: "Stage", name: "Stage" },
                ]}
              />

              <Textearea label="Missions du poste" inputMessage="Yes" />

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

              <BlackButton
                buttonName="Ajouter cette offre"
                buttonFunction={handlePosted}
              />
            </div>
          </div>
        )}

        {posted && (
          <div>
            <div className="confOfferCreation">
              <h2>L'offre d'emploi a bien été publiée</h2>
            </div>
            <div className="confOfferCreation">
              <WhiteButton
                buttonName="Retour à mon espace"
                buttonFunction={console.info("Fonction")}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default OfferCreation;
