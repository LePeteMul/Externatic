import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import RedButton from "../../components/Elements/RedButton";
import InputListe from "../../components/Elements/InputListe";
import LanguageList from "../../components/Elements/LanguageList";
import InputCv from "../../components/Elements/InputCv";
import Popup from "../../components/Elements/Popup";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";

function CandidateProfile() {
  const { userId } = useContext(UserConnexionContext);
  const [user, setUser] = useState({});
  console.warn("Dans UserProfile, userID : ", user.id);

  useEffect(() => {
    fetch(`http://localhost:8080/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setFormData({
          ...formData,
          gender: data.gender,
          lastname: data.lastname,
          firstname: data.firstname,
          email: data.email,
          phone: data.phone,
          city: data.city,
          cv: data.cv,
          // language: "",
        });
      })
      .catch((err) => console.error(err));
  }, []);

  console.warn("user dans le admin profile = ", user);
  console.warn("is admin ? ", user.admin);
  console.warn("lastname = ", user.lastname);
  console.warn("password = ", user.password);

  const navigate = useNavigate();
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const handlePopup1Open = () => {
    setShowPopup1(true);
  };

  const handlePopup1Close = () => {
    setShowPopup1(false);
    navigate("/candidate/dashboard"); // Rediriger vers la première page différente
  };

  const handlePopup2Open = () => {
    setShowPopup2(true);
  };

  const handlePopup2Close = () => {
    setShowPopup2(false);
    navigate("/"); // Rediriger vers la deuxième page différente
  };

  const [formData, setFormData] = useState({
    gender: user.gender,
    lastname: user.lastname,
    firstname: user.firstname,
    email: user.email,
    phone: user.phone,
    city: user.city,
    cv: user.cv,
    // language: "",
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (file) => {
    setFormData((previousValue) => ({
      ...previousValue,
      cv: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `http://localhost:8080/api/user/`;
    const requestData = { ...formData };

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.info("Response:", data);
        // Perform any necessary actions after successful POST request
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occurred during the POST request
      });
  };

  const handleDeletion = () => {
    fetch(`http://localhost:8080/api/user/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 204) {
          setFormData({
            gender: user.gender,
            lastname: user.lastname,
            firstname: user.firstname,
            email: user.email,
            phone: user.phone,
            city: user.city,
            // language: "",
            cv: user.cv,
            password: user.password,
            admin: user.admin,
          });
          handlePopup2Open();
        } else {
          console.error("Failed to delete the candidate.");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="CandidateProfile">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="candidateProfileTitle">
          <h1>Mon profil</h1>
        </div>
        <form onSubmit={handleSubmit} className="input">
          <InputTexte
            label="Nom"
            name="lastname"
            placeholder="Dupont"
            type="text"
            handleChange={handleChange}
            value={formData.lastname}
          />
          <InputTexte
            label="Prénom"
            name="firstname"
            placeholder="Marie"
            type="text"
            handleChange={handleChange}
            value={formData.firstname}
          />
          <InputTexte
            label="Email"
            name="email"
            placeholder="m.dupont@gmail.com"
            type="email"
            handleChange={handleChange}
            value={formData.email}
          />
          <InputTexte
            label="Téléphone"
            name="phone"
            placeholder="06 06 06 06 06"
            type="tel"
            handleChange={handleChange}
            value={formData.phone}
          />
          <InputTexte
            label="Ville"
            name="city"
            placeholder="Paris"
            type="text"
            handleChange={handleChange}
            value={formData.city}
          />
          <InputCv
            label="CV"
            accept=".pdf"
            handleChange={handleFileChange}
            userId={userId}
          />
          <LanguageList
            name="language"
            handleChange={handleChange}
            selectedLanguages={formData.language}
          />
          <BlackButton
            buttonName="Valider mes modifications"
            buttonFunction={(event) => {
              event.preventDefault();
              handlePopup1Open();
              handleSubmit(event);
            }}
          />

          {showPopup1 && (
            <Popup
              title="Mise à jour effectuée"
              message="Les informations ont bien été modifiées"
              open={showPopup1}
              onClose={handlePopup1Close}
              buttonname="Retour au Dashboard"
            />
          )}
          <RedButton
            buttonName="Supprimer mes données"
            buttonFunction={(event) => {
              event.preventDefault();
              handlePopup2Open();
              handleDeletion();
            }}
          />

          {showPopup2 && (
            <Popup
              title="Votre compte a bien été supprimé"
              open={showPopup2}
              onClose={handlePopup2Close}
              buttonname={"Retour a l'accueil"}
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default CandidateProfile;
