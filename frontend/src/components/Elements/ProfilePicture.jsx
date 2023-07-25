import React from "react";
import defaultProfile from "../../assets/icons/userIcon2.png";

function ProfilePicture() {
  const profilePictureDEF = defaultProfile;
  return (
    <div className="ProfilePicture">
      <img className="ProfileImage" src={profilePictureDEF} alt="connexion" />
    </div>
  );
}

export default ProfilePicture;
