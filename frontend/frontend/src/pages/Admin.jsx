import { useEffect, useState } from "react";

function Admin() {
  const [questions, setQuestions] = useState([]);
  const [tournaments, setTournaments] = useState([]);

  const loadQuestions = () => {
    fetch("http://localhost:8080/api/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error loading questions:", error));
  };

  const loadTournaments = () => {
    fetch("http://localhost:8080/api/tournaments")
      .then((response) => response.json())
      .then((data) => setTournaments(data))
      .catch((error) => console.error("Error loading tournaments:", error));
  };

  useEffect(() => {
    loadQuestions();
    loadTournaments();
  }, []);

  const deleteQuestion = (id) => {
    fetch(`http://localhost:8080/api/questions/delete/${id}`, {
      method: "DELETE"
    })
      .then(() => loadQuestions())
      .catch((error) => console.error("Error deleting question:", error));
  };

  const deleteTournament = (id) => {
    fetch(`http://localhost:8080/api/tournaments/delete/${id}`, {
      method: "DELETE"
    })
      .then(() => loadTournaments())
      .catch((error) => console.error("Error deleting tournament:", error));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>

      <h3>Questions</h3>
      {questions.map((question) => (
        <div
          key={question.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px"
          }}
        >
          <p><strong>Question:</strong> {question.questionText}</p>
          <p><strong>Answer:</strong> {question.answer}</p>
          <p><strong>Difficulty:</strong> {question.difficulty}</p>
          <p><strong>Category:</strong> {question.category}</p>
          <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
        </div>
      ))}

      <h3 style={{ marginTop: "30px" }}>Tournaments</h3>
      {tournaments.map((tournament) => (
        <div
          key={tournament.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px"
          }}
        >
          <p><strong>Name:</strong> {tournament.name}</p>
          <p><strong>Location:</strong> {tournament.location}</p>
          <p><strong>Date:</strong> {tournament.date}</p>
          <button onClick={() => deleteTournament(tournament.id)}>Delete Tournament</button>
        </div>
      ))}
    </div>
  );
}

export default Admin;