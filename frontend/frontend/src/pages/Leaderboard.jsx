import { useEffect, useState } from "react";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/leaderboard")
      .then((response) => response.json())
      .then((data) => setLeaders(data))
      .catch((error) => console.error("Error loading leaderboard:", error));
  }, []);

  return (
    <div style={pageCard}>
      <h2 style={{ color: "#1e293b" }}>🏆 Bowl Leaderboard</h2>

      {leaders.length === 0 ? (
        <p>No scores yet.</p>
      ) : (
        leaders.map((leader, index) => (
          <div key={index} style={leaderCard}>
            <h3>
              #{index + 1} {leader.username}
            </h3>
            <p>
              <strong>Score:</strong> {leader.score}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

const pageCard = {
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
};

const leaderCard = {
  backgroundColor: "#f1f5f9",
  padding: "15px",
  marginBottom: "12px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0"
};

export default Leaderboard;