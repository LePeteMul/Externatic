import React from "react";
import "./ProfilePicture.scss";
import defaultProfile from "../../assets/icons/userIcon2.png";

function ProfilePicture() {
  return (
    <div className="ProfilePicture">
      <img
        className="ProfileImage"
        src={defaultProfile}
        alt="Le profil par défaut"
      />
    </div>
  );
}

export default ProfilePicture;
