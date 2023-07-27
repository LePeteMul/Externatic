import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";
import InputTexte from "../../components/Elements/InputTexte";
import Popup from "../../components/Elements/Popup";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";

function AdminProfile() {
  const token = localStorage.getItem("token");

  const { userId } = useContext(UserConnexionContext);
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setAdmin(data);
        setFormData({
          ...formData,
          lastname: data.lastname,
          firstname: data.firstname,
          email: data.email,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  const navigate = useNavigate();
  const [showPopup1, setShowPopup1] = useState(false);

  const handlePopup1Open = () => {
    setShowPopup1(true);
  };

  const handlePopup1Close = () => {
    setShowPopup1(false);
    navigate("/admin/dashboard");
  };

  const [formData, setFormData] = useState({
    lastname: admin.lastname,
    firstname: admin.firstname,
    email: admin.email,
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
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
    } else if (formData.lastname && formData.firstname && formData.email) {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => {
          if (response.status !== 204) {
            console.error(response.statusText);
          }
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    } else {
      setError("Merci de compléter tous les champs");
    }
  };

  if (Object.keys(admin).length === 0) {
    return null;
  }

  return (
    <div className="AdminProfile">
      <HeaderBasic />
      <div className="boxWithoutHeader">
        <div className="AdminProfileTitle">
          <h1>Mon profil administrateur</h1>
        </div>
        <form onSubmit={handleSubmit} className="input">
          <div className="AdminProfileInformations">
            <InputTexte
              label="Nom"
              name="lastname"
              placeholder="DURAND"
              handleChange={handleChange}
              type="text"
              value={formData.lastname}
            />

            <InputTexte
              label="Prénom"
              name="firstname"
              placeholder="Franck"
              handleChange={handleChange}
              type="text"
              value={formData.firstname}
            />

            <InputTexte
              label="Email"
              name="email"
              placeholder="f.durand@externatic.fr"
              handleChange={handleChange}
              type="email"
              value={formData.email}
            />
          </div>
          <div className="AdminProfileEnd">
            <BlackButton
              buttonName="Valider les modifications"
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminProfile;
