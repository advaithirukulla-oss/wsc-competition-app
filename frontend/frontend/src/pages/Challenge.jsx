import { useEffect, useState } from "react";

function Challenge() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error loading questions:", error));
  }, []);

  const selectAnswer = (questionId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer
    });
  };

  const submitAnswer = (question) => {
    const selectedAnswer = selectedAnswers[question.id];

    if (!selectedAnswer) {
      setMessage("Please select an answer first.");
      return;
    }

    fetch("http://localhost:8080/api/submissions/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: localStorage.getItem("loggedInUser") || "Guest",
        questionId: question.id,
        submittedAnswer: selectedAnswer,
        timeLeft: 0
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.correct) {
          setMessage("Correct answer!");
        } else {
          setMessage("Wrong answer.");
        }
      })
      .catch((error) => {
        console.error("Error submitting answer:", error);
        setMessage("Error submitting answer.");
      });
  };

  return (
    <div style={pageCard}>
      <h2>Challenge Questions</h2>

      {message && <p style={{ fontWeight: "bold" }}>{message}</p>}

      {questions.length === 0 ? (
        <p>No questions found.</p>
      ) : (
        questions.map((question) => (
          <div key={question.id} style={questionCard}>
            <h3>{question.questionText}</h3>

            <div style={optionsBox}>
              <button
                style={optionButton}
                onClick={() => selectAnswer(question.id, question.optionA)}
              >
                A. {question.optionA || "Option A missing"}
              </button>

              <button
                style={optionButton}
                onClick={() => selectAnswer(question.id, question.optionB)}
              >
                B. {question.optionB || "Option B missing"}
              </button>

              <button
                style={optionButton}
                onClick={() => selectAnswer(question.id, question.optionC)}
              >
                C. {question.optionC || "Option C missing"}
              </button>

              <button
                style={optionButton}
                onClick={() => selectAnswer(question.id, question.optionD)}
              >
                D. {question.optionD || "Option D missing"}
              </button>
            </div>

            <p>
              <strong>Selected:</strong>{" "}
              {selectedAnswers[question.id] || "None"}
            </p>

            <button style={submitButton} onClick={() => submitAnswer(question)}>
              Submit Answer
            </button>
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

const questionCard = {
  backgroundColor: "#f8fafc",
  padding: "18px",
  marginBottom: "18px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0"
};

const optionsBox = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "10px",
  marginTop: "15px",
  marginBottom: "15px"
};

const optionButton = {
  backgroundColor: "#e2e8f0",
  border: "1px solid #cbd5e1",
  padding: "12px",
  borderRadius: "8px",
  cursor: "pointer",
  textAlign: "left"
};

const submitButton = {
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold"
};

export default Challenge;