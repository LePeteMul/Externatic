import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import InputTexte from "../../components/Elements/InputTexte";
import userIcon from "../../assets/icons/user.png";
import BlackButton from "../../components/Elements/BlackButton";
import UserConnexionContext from "../../contexts/UserConnexionContext/UserConnexionContext";

function ProfileCandidate() {
  const { userId } = useContext(UserConnexionContext);
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:8080/api/user/${userId}`)
  //     .then((response) => response.json())
  //     .then((data) => setUser(data))
  //     .catch((err) => console.error(err));
  // }, []);
  // console.warn("user = ", user);

  // tant que les étapes précédentes sont pas implémentées,
  // on part sur le candidat à l'id 8

  useEffect(() => {
    fetch(`http://localhost:8080/api/user/8`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);
  console.warn("user = ", user);

  return (
    <div>
      <HeaderBasic />
      <div className="profile_candidate">
        <div className="picture">
          <img src={userIcon} alt="" />
        </div>

        <div className="name">
          <h2>{`${user.firstname} ${user.lastname}`}</h2>
        </div>

        <div className="candidateResume">
          <InputTexte label="Genre" value={`${user.gender}`} disabled />
          <InputTexte label="Email:" value={`${user.email}`} disabled />

          <InputTexte label="Téléphone :" value={`${user.phone}`} disabled />

          <InputTexte label="Ville :" value={`${user.city}`} disabled />

          <InputTexte
            label="Technologies maîtrisées :"
            value={`${user.language}`}
            disabled
          />

          <InputTexte
            label="Consulter le CV :"
            inputMessage="Consulter le CV"
            // changer par un bouton qui charge le pdf
          />
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
