import { useEffect, useState } from "react";

function Reports() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/reports/summary")
      .then((response) => response.json())
      .then((data) => setReport(data))
      .catch((error) => console.error("Error loading reports:", error));
  }, []);

  if (!report) {
    return (
      <div style={pageCard}>
        <h2>📊 Reports</h2>
        <p>Loading report...</p>
      </div>
    );
  }

  return (
    <div style={pageCard}>
      <h2>📊 Competition Reports</h2>

      <div style={statsGrid}>
        <div style={statCard}>
          <h3>Total Participants</h3>
          <p>{report.totalParticipants}</p>
        </div>

        <div style={statCard}>
          <h3>Highest Score</h3>
          <p>{report.highestScore}</p>
        </div>

        <div style={statCard}>
          <h3>Average Score</h3>
          <p>{report.averageScore.toFixed(2)}</p>
        </div>
      </div>

      <h3 style={{ marginTop: "30px" }}>🏆 Top 3 Winners</h3>

      {report.topThree.length === 0 ? (
        <p>No winners yet.</p>
      ) : (
        report.topThree.map((winner, index) => (
          <div key={index} style={winnerCard}>
            <h3>#{index + 1} {winner.username}</h3>
            <p><strong>Bowl:</strong> {winner.bowlScore}</p>
            <p><strong>Writing:</strong> {winner.writingScore}</p>
            <p><strong>Debate:</strong> {winner.debateScore}</p>
            <h3>Total: {winner.totalScore}</h3>
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

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "15px",
  marginTop: "20px"
};

const statCard = {
  backgroundColor: "#f1f5f9",
  padding: "18px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
  textAlign: "center"
};

const winnerCard = {
  backgroundColor: "#f8fafc",
  padding: "15px",
  marginBottom: "12px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0"
};

export default Reports;