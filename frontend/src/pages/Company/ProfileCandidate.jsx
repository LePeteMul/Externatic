import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import BlackButton from "../../components/Elements/BlackButton";

function ProfileCandidate() {
  const [user, setUser] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/${params.id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <HeaderBasic />
      <div className="profile_candidate">
        <div className="picture">
          <img src={user.profil_picture} alt="" />
        </div>

        <div className="name">
          <h2>{`${user.firstname} ${user.lastname}`}</h2>
        </div>

        <div className="candidateResume">
          <InputTexte label="Email:" value={`${user.email}`} disabled />

          <InputTexte label="Téléphone :" value={`${user.phone}`} disabled />

          <InputTexte label="Ville :" value={`${user.city}`} disabled />

          <div className="cv">
            <p>CV :</p>
            <a href={`${user.cv}`} target="_blank" rel="noopener noreferrer">
              Le consulter
            </a>
          </div>
        </div>
        <div className="profileButton">
          <NavLink to="/company/application">
            <BlackButton buttonName="Retour aux candidatures" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProfileCandidate;
