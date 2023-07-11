import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeaderBasic from "../../components/Header/HeaderBasic";
import CandidateCard from "../../components/Elements/CandidateCard";
import userlogo from "../../assets/icons/userIcon2.png";
import BlackButton from "../../components/Elements/BlackButton";

function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/user/candidats")
      .then((response) => response.json())
      .then(console.warn("candidates du fetch = ", candidates))
      .then((data) => setCandidates(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDeleteCandidate = (id) => {
    console.warn("candidates du handleDelete ", candidates);
    console.warn("id du handledelete ", id);
    fetch(`http://localhost:8080/api/user/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 204) {
          // If deletion is successful, update the candidate list
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
            console.warn("Candidate Array:", candidate);
            // Assuming candidateArray contains the necessary data for rendering CandidateCard
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
