function Home() {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      }}
    >
      <h1 style={{ color: "#1e293b" }}>WSC Competition App</h1>
      <h3 style={{ color: "#475569" }}>Welcome to your project</h3>

      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        This app manages tournaments, questions, bowl rounds, writing, debates,
        and leaderboards.
      </p>

      <div
        style={{
          marginTop: "25px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "15px"
        }}
      >
        <div style={cardStyle}>
          <h3>🏆 Tournaments</h3>
          <p>Create and manage WSC events.</p>
        </div>

        <div style={cardStyle}>
          <h3>⚡ Bowl</h3>
          <p>Timed questions with speed scoring.</p>
        </div>

        <div style={cardStyle}>
          <h3>✍️ Writing</h3>
          <p>Submit writing and view rankings.</p>
        </div>

        <div style={cardStyle}>
          <h3>📊 Leaderboards</h3>
          <p>Track scores and winners.</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#f1f5f9",
  padding: "18px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0"
};

export default Home;