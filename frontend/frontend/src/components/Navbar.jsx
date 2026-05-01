import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser("");
    navigate("/login");
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "18px",
    fontWeight: "bold",
    fontSize: "15px"
  };

  return (
    <div style={navStyle}>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/register" style={linkStyle}>Register</Link>
        <Link to="/challenge" style={linkStyle}>Challenge</Link>
        <Link to="/bowl" style={linkStyle}>Bowl</Link>
        <Link to="/leaderboard" style={linkStyle}>Bowl Board</Link>
        <Link to="/overall" style={linkStyle}>Overall</Link>
        <Link to="/reports" style={linkStyle}>Reports</Link>
        <Link to="/writing" style={linkStyle}>Writing</Link>
        <Link to="/writingleaderboard" style={linkStyle}>Writing Board</Link>
        <Link to="/admin" style={linkStyle}>Admin</Link>
      </div>

      <div>
        {loggedInUser ? (
          <>
            <span style={{ color: "white", marginRight: "12px" }}>
              Logged in as: {loggedInUser}
            </span>

            <button onClick={logout} style={logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <span style={{ color: "#cbd5e1" }}>Not logged in</span>
        )}
      </div>
    </div>
  );
}

const navStyle = {
  backgroundColor: "#1e293b",
  padding: "16px 24px",
  marginBottom: "25px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "12px"
};

const logoutButton = {
  backgroundColor: "#dc2626",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold"
};

export default Navbar;