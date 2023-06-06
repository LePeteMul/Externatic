import React from "react";
import HeaderWave from "../../components/Header/HeaderWave";
import BlackButton from "../../components/Elements/BlackButton";
import WhiteButton from "../../components/Elements/WhiteButton";
import InputText from "../../components/Elements/InputText";
import InputList from "../../components/Elements/InputList";
import JobCard from "../../components/Elements/JobCard";
// import CandidateCard from "../../components/Elements/CandidateCard";

function HomePage() {
  return (
    <div className="HomePage">
      <HeaderWave />
      <div className="boxWithoutHeader">
        <BlackButton
          buttonName="Suivant"
          buttonFunction={console.info("Fonction")}
        />
        <WhiteButton
          buttonName="Suivant"
          buttonFunction={console.info("Fonction")}
        />
        <InputText label="Label" inputMessage={"Entrez l'information"} />
        <InputList
          label="Label"
          inputMessage="Selectionner un choix"
          data={[
            { value: "choix1", name: "Choix n°1" },
            { value: "choix2", name: "Choix n°2" },
            { value: "choix3", name: "Choix n°3" },
          ]}
        />
        <br />
        <JobCard
          logo="../../assets/images/HomePage/logo-nickel.png"
          companyName="Nickel"
          job="Service Delivery Manager"
          contractType="CDI"
          jobCity="Bordeaux"
          date="31/05/2023"
        />

        {/* <CandidateCard
          profilePicture="https://cdn.discordapp.com/attachments/1115020679276920872/1115235734031454208/design.png"
          lastname="bonjour"
          firstname="laforme"
          email="bonjourlaforme@gmail.com"
        /> */}
      </div>
    </div>
  );
}

export default HomePage;
