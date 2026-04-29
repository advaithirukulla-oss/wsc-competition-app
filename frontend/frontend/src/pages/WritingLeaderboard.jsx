import { useEffect, useState } from "react";

function WritingLeaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/api/writing-leaderboard")
      .then((res) => res.json())
      .then((data) => {
        console.log("Writing leaderboard data:", data);
        setLeaders(data);

        if (data.length === 0) {
          setMessage("No writing scores yet");
        } else {
          setMessage("");
        }
      })
      .catch((err) => {
        console.error("Error loading writing leaderboard:", err);
        setMessage("Error loading writing leaderboard");
      });
  }, []);

  return (
    <div>
      <h2>Writing Leaderboard ✍️🏆</h2>

      {message ? (
        <p>{message}</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{leader.participantName}</td>
                <td>{leader.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default WritingLeaderboard;