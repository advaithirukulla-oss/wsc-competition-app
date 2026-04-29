import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const loginData = {
      email,
      password
    };

    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      });

      const data = await response.text();

      // ❗ Check if login failed
      if (data.toLowerCase().includes("invalid")) {
        setMessage("Login failed. Check email or password.");
        return;
      }

      // ✅ Save user (VERY IMPORTANT)
      localStorage.setItem("loggedInUser", email);

      setMessage("Login successful!");

      // ✅ Redirect + refresh so navbar updates
      window.location.href = "/";
      
    } catch (error) {
      setMessage("Error logging in");
      console.error(error);
    }
  };

  return (
    <div style={pageCard}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />
      <br /><br />

      <button onClick={handleLogin} style={buttonStyle}>
        Login
      </button>

      <p>{message}</p>
    </div>
  );
}

const pageCard = {
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
};

const inputStyle = {
  padding: "12px",
  width: "100%",
  maxWidth: "350px",
  borderRadius: "8px",
  border: "1px solid #cbd5e1"
};

const buttonStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold"
};

export default Login;