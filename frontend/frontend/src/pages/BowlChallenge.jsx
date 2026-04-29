import { useEffect, useState } from "react";

function BowlChallenge() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(15);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (!questions.length || finished) return;

    if (timeLeft === 0) {
      submitAnswer();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, questions, finished]);

  const submitAnswer = () => {
    const currentQuestion = questions[currentIndex];

    if (!currentQuestion) {
      setFinished(true);
      return;
    }

    fetch("http://localhost:8080/api/submissions/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: localStorage.getItem("loggedInUser") || "Guest",
        questionId: currentQuestion.id,
        submittedAnswer: answer,
        timeLeft: timeLeft
      })
    })
      .then(() => {
        nextQuestion();
      })
      .catch((error) => console.error(error));
  };

  const nextQuestion = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= questions.length) {
      setFinished(true);
      return;
    }

    setCurrentIndex(nextIndex);
    setAnswer("");
    setTimeLeft(15);
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div style={pageCard}>
      <h2 style={{ color: "#1e293b" }}>⚡ Bowl Challenge</h2>

      {finished ? (
        <div style={successBox}>
          <h3>Finished!</h3>
          <p>Your answers were submitted.</p>
        </div>
      ) : currentQuestion ? (
        <>
          <p style={{ color: "#64748b" }}>
            Question {currentIndex + 1} of {questions.length}
          </p>

          <div style={questionBox}>
            <h3>{currentQuestion.questionText}</h3>
            <p><strong>Category:</strong> {currentQuestion.category}</p>
            <p><strong>Difficulty:</strong> {currentQuestion.difficulty}</p>
          </div>

          <h3 style={{ color: timeLeft <= 5 ? "#dc2626" : "#16a34a" }}>
            Time Left: {timeLeft}
          </h3>

          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer"
            style={inputStyle}
          />

          <br /><br />

          <button onClick={submitAnswer} style={buttonStyle}>
            Submit Fast
          </button>
        </>
      ) : (
        <h3>Loading...</h3>
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

const questionBox = {
  backgroundColor: "#f1f5f9",
  padding: "18px",
  borderRadius: "10px",
  marginTop: "15px",
  marginBottom: "15px"
};

const inputStyle = {
  padding: "12px",
  width: "100%",
  maxWidth: "400px",
  borderRadius: "8px",
  border: "1px solid #cbd5e1",
  fontSize: "16px"
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

const successBox = {
  backgroundColor: "#dcfce7",
  padding: "18px",
  borderRadius: "10px",
  color: "#166534"
};

export default BowlChallenge;