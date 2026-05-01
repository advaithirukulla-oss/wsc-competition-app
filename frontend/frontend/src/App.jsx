import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Challenge from "./pages/Challenge";
import Leaderboard from "./pages/Leaderboard";
import Writing from "./pages/Writing";
import Admin from "./pages/Admin";
import WritingLeaderboard from "./pages/WritingLeaderboard";
import BowlChallenge from "./pages/BowlChallenge";
import CombinedLeaderboard from "./pages/CombinedLeaderboard";
import Reports from "./pages/Reports";

function App() {
  return (
    <div style={{ fontFamily: "Arial", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/bowl" element={<BowlChallenge />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/overall" element={<CombinedLeaderboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writingleaderboard" element={<WritingLeaderboard />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;