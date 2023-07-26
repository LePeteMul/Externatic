import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";
import CompanyConnexionContext from "../../contexts/CompanyConnexionContext/CompanyConnexionContext";
import waveWhite from "../../assets/images/Dashboard/vague.svg";
import logo from "../../assets/images/Header/logoExternatic.svg";
import BurgerMenuBasic from "./BurgerMenuBasic";
import ProfilePicture from "../Elements/ProfilePicture";
import InputImage from "../Elements/InputImage";
import InputLogo from "../Elements/InputLogo";

function HeaderWaveInverted({ open, handleOpen, title, profil_picture }) {
  const token = localStorage.getItem("token");

  const { userConnected, isAdmin, userId } = useContext(UserConnexionContext);
  const { companyConnected, companyId } = useContext(CompanyConnexionContext);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [uploadLogoUrl, setUploadLogoUrl] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:8080/api/user/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.profil_picture !== undefined && data.profil_picture !== "") {
            setUploadedImageUrl(data.profil_picture);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [userId, profil_picture]);

  useEffect(() => {
    if (companyId) {
      fetch(`http://localhost:8080/api/company/${companyId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.logo !== undefined && data.logo !== "") {
            setUploadLogoUrl(data.logo);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [companyId, logo]);

  const handleClick = () => {
    if (companyConnected) {
      navigate("/company/dashboard");
    }
    if (userConnected && isAdmin) {
      navigate("/admin/dashboard");
    }
    if (userConnected && !isAdmin) {
      navigate("/candidate/dashboard");
    }
    if (!companyConnected && !userConnected) {
      navigate("/login");
    }
  };
  /// changement de la photo de profile

  const handleImageChange = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setUploadedImageUrl(imageUrl);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId);

    fetch(`http://localhost:8080/api/image/${userId}`, {
      method: "POST",
      body: formData,
      Authorization: `Bearer ${token}`,
    })
      .then((response) => response.json())
      .then((data) => {
        const imageUrl1 = data.fileUrl;
        setUploadedImageUrl(imageUrl1);
      })
      .catch((error) => console.error(error));
  };

  // changement du logo company

  const handleCompanyImageChange = (file) => {
    const logoUrl = URL.createObjectURL(file);
    setUploadLogoUrl(logoUrl);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("companyId", companyId);

    fetch(`http://localhost:8080/api/image/${companyId}`, {
      method: "POST",
      body: formData,
      Authorization: `Bearer ${token}`,
    })
      .then((response) => response.json())
      .then((data) => {
        const logoUrl1 = data.fileUrl;
        setUploadLogoUrl(logoUrl1);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="HeaderWaveInverted">
      <div className="TopHeader">
        <BurgerMenuBasic
          className="BurgerMenu"
          open={open}
          handleOpen={handleOpen}
        />
        <NavLink to="/">
          <img className="Logo" src={logo} alt="Le Logo" />
        </NavLink>
        <button type="button" onClick={handleClick}>
          <ProfilePicture />
        </button>
      </div>

      <div className="pp-import">
        <h1 className="titleHeader">{title}</h1>
        {userConnected ? (
          <InputImage
            label=""
            userId={userId}
            handleChange={handleImageChange}
            preview={uploadedImageUrl}
          />
        ) : null}
        {companyConnected ? (
          <InputLogo
            label=""
            companyId={companyId}
            handleChange={handleCompanyImageChange}
            preview={uploadLogoUrl}
          />
        ) : null}
      </div>
      <img className="Wave" src={waveWhite} alt="La Vague Blanche" />
    </div>
  );
}

HeaderWaveInverted.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func,
  title: PropTypes.string.isRequired,
  profil_picture: PropTypes.string,
};

HeaderWaveInverted.defaultProps = {
  open: undefined,
  handleOpen: undefined,
  profil_picture: undefined,
};

export default HeaderWaveInverted;
