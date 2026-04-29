import { useState } from "react";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    const userData = {
      fullName,
      email,
      password,
      role
    };

    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();
      setMessage("Registered successfully: " + data.fullName);
    } catch (error) {
      setMessage("Error registering user");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input placeholder="Name" onChange={(e) => setFullName(e.target.value)} /><br /><br />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <input placeholder="Role" onChange={(e) => setRole(e.target.value)} /><br /><br />

      <button onClick={handleRegister}>Register</button>

      <p>{message}</p>
    </div>
  );
}

export default Register;