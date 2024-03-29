import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";
import RedButton from "../../components/Elements/RedButton";
import InputCv from "../../components/Elements/InputCv";
import Popup from "../../components/Elements/Popup";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";

function CandidateProfile() {
  const token = localStorage.getItem("token");

  const { userId } = useContext(UserConnexionContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/${userId}`)
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
        });
      })
      .catch((err) => console.error(err));
  }, []);

  const navigate = useNavigate();
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const handlePopup1Open = () => {
    setShowPopup1(true);
  };

  const handlePopup1Close = () => {
    setShowPopup1(false);
    navigate("/candidate/dashboard");
  };

  const handlePopup2Open = () => {
    setShowPopup2(true);
  };

  const handlePopup2Close = () => {
    setShowPopup2(false);
    navigate("/");
  };

  const [formData, setFormData] = useState({
    lastname: user.lastname,
    firstname: user.firstname,
    email: user.email,
    phone: user.phone,
    city: user.city,
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

  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `${import.meta.env.VITE_BACKEND_URL}/api/user/${userId}`;
    const requestData = { ...formData };

    /* eslint-disable-next-line */
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setError("Adresse mail incorrecte");
    } else if (
      formData.lastname &&
      formData.firstname &&
      formData.email &&
      formData.phone
    ) {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      })
        .then(() => {})
        .catch((err) => {
          console.error("Error:", err);
        });
    } else {
      setError("Merci de compléter tous les champs");
    }
  };

  const handleDeletion = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/${userId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
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
            placeholder="0606060606"
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
          <a href={user.cv} target="_blank" rel="noopener noreferrer">
            Consulter le CV
          </a>

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
              title=""
              message={error || "Les informations ont bien été modifiées"}
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
