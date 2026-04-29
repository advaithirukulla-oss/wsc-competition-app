import { useEffect, useState } from "react";

function Writing() {
  const [participantName, setParticipantName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const [writings, setWritings] = useState({});
  const [scores, setScores] = useState({});

  // Load writings
  const loadWritings = async () => {
    const res = await fetch("http://localhost:8080/api/writing");
    const data = await res.json();
    setWritings(data);
  };

  useEffect(() => {
    loadWritings();
  }, []);

  // Submit writing
  const handleSubmitWriting = async () => {
    const writingData = { participantName, title, content };

    try {
      const res = await fetch("http://localhost:8080/api/writing/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(writingData)
      });

      const data = await res.json();
      setMessage("Submitted: " + data.title);

      setParticipantName("");
      setTitle("");
      setContent("");

      loadWritings();
    } catch {
      setMessage("Error submitting");
    }
  };

  // Score writing
  const handleScore = async (id) => {
    const score = scores[id];

    try {
      await fetch(`http://localhost:8080/api/writing/score/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ score: Number(score) })
      });

      setMessage("Score submitted!");
      loadWritings();
    } catch {
      setMessage("Error scoring");
    }
  };

  return (
    <div>
      <h2>Writing Submission</h2>

      {/* Submit section */}
      <input placeholder="Name" value={participantName} onChange={(e) => setParticipantName(e.target.value)} /><br /><br />
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br /><br />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} /><br /><br />

      <button onClick={handleSubmitWriting}>Submit Writing</button>

      <hr />

      {/* Judge section */}
      <h3>Judge Panel</h3>

      {Array.isArray(writings) && writings.map((w) => (
        <div key={w.id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
          <h4>{w.title}</h4>
          <p><b>{w.participantName}</b></p>
          <p>{w.content}</p>
          <p>Score: {w.score ?? "Not graded"}</p>

          <input
            placeholder="Enter score"
            value={scores[w.id] || ""}
            onChange={(e) => setScores({ ...scores, [w.id]: e.target.value })}
          />

          <button onClick={() => handleScore(w.id)}>Submit Score</button>
        </div>
      ))}

      <p>{message}</p>
    </div>
  );
}

export default Writing;