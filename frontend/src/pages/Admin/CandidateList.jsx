import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import CandidateCard from "../../components/Elements/CandidateCard";
import userlogo from "../../assets/icons/userIcon2.png";
import BlackButton from "../../components/Elements/BlackButton";

function CandidateList() {
  const token = localStorage.getItem("token");

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/user/candidats")
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDeleteCandidate = (id) => {
    fetch(`http://localhost:8080/api/user/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        if (response.status === 204) {
          setCandidates((prevCandidates) =>
            prevCandidates.filter((candidate) => candidate.id !== id)
          );
        } else {
          console.error("Failed to delete the candidate.");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="CandidateList">
      <HeaderBasic />

      <div className="boxWithoutHeader">
        <div className="CandidateListTitle">
          <h1>Candidats</h1>
        </div>

        <div className="candidate">
          {candidates.map((candidate) => {
            return (
              <CandidateCard
                key={candidate.id}
                id={candidate.id}
                profilpicture={
                  candidate.profil_picture ? candidate.profil_picture : userlogo
                }
                lastname={candidate.lastname}
                firstname={candidate.firstname}
                email={candidate.email}
                onDelete={handleDeleteCandidate}
              />
            );
          })}
        </div>
        <div className="returnButton">
          <NavLink to="/admin/dashboard">
            <BlackButton buttonName="Retour à l'administration" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CandidateList;
