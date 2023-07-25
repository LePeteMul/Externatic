import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import BlackButton from "../../components/Elements/BlackButton";
import InputTexte from "../../components/Elements/InputTexte";
import Popup from "../../components/Elements/Popup";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";

function AdminProfile() {
  const { userId } = useContext(UserConnexionContext);
  const [admin, setAdmin] = useState({});
  console.warn("Dans AdminProfile, userID : ", admin.id);

  useEffect(() => {
    fetch(`http://localhost:8080/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setAdmin(data);
        setFormData({
          ...formData,
          gender: data.gender,
          lastname: data.lastname,
          firstname: data.firstname,
          email: data.email,
          phone: data.phone,
          city: data.city,
          cv: data.cv,
          // password: "£££",
        });
      })
      .catch((err) => console.error(err));
  }, []);
  console.warn("admin dans le admin profile = ", admin);
  console.warn("is admin ? ", admin.admin);
  console.warn("lastname = ", admin.lastname);

  const navigate = useNavigate();
  const [showPopup1, setShowPopup1] = useState(false);

  const handlePopup1Open = () => {
    setShowPopup1(true);
  };

  const handlePopup1Close = () => {
    setShowPopup1(false);
    navigate("/admin/dashboard"); // Rediriger vers la première page différente
  };

  const [formData, setFormData] = useState({
    gender: admin.gender,
    lastname: admin.lastname,
    firstname: admin.firstname,
    email: admin.email,
    phone: admin.phone,
    city: admin.city,
    cv: admin.cv,
    // password: "£££",
  });

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.info("formData = ", formData);
    const url = `http://localhost:8080/api/user/${userId}`;
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

  if (Object.keys(admin).length === 0) {
    return null; // or render a loading spinner/placeholder
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
                title="Mise à jour effectuée"
                message=""
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
