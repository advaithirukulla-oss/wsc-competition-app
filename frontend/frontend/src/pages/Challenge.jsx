import { useEffect, useState } from "react";

function Challenge() {
  const [questions, setQuestions] = useState([]);
  const [participantName, setParticipantName] = useState("");
  const [message, setMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  // Load questions from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error loading questions:", error));
  }, []);

  // Submit answer
  const handleSubmitAnswer = async (questionId, selectedAnswer) => {
    if (answered) return;

    if (!participantName.trim()) {
      setMessage("Please enter participant name first");
      return;
    }

    const submissionData = {
      participantName: participantName,
      selectedAnswer: selectedAnswer
    };

    try {
      const response = await fetch(
        `http://localhost:8080/api/submissions/${questionId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(submissionData)
        }
      );

      const data = await response.json();

      if (data.correct) {
        setMessage("✅ Correct answer!");
        setScore(score + 1);
      } else {
        setMessage("❌ Wrong answer!");
      }

      setAnswered(true);
    } catch (error) {
      setMessage("Error submitting answer");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Challenge Round</h2>

      <input
        placeholder="Enter participant name"
        value={participantName}
        onChange={(e) => setParticipantName(e.target.value)}
      />
      <br /><br />

      <h3>Score: {score}</h3>

      {questions.length === 0 ? (
        <p>No questions available</p>
      ) : (
        <div>
          <h3>{questions[currentIndex].questionText}</h3>

          <button
            onClick={() => handleSubmitAnswer(questions[currentIndex].id, "A")}
          >
            A. {questions[currentIndex].optionA}
          </button>
          <br /><br />

          <button
            onClick={() => handleSubmitAnswer(questions[currentIndex].id, "B")}
          >
            B. {questions[currentIndex].optionB}
          </button>
          <br /><br />

          <button
            onClick={() => handleSubmitAnswer(questions[currentIndex].id, "C")}
          >
            C. {questions[currentIndex].optionC}
          </button>
          <br /><br />

          <button
            onClick={() => handleSubmitAnswer(questions[currentIndex].id, "D")}
          >
            D. {questions[currentIndex].optionD}
          </button>

          <br /><br />

          {currentIndex < questions.length - 1 ? (
            <button
              onClick={() => {
                setCurrentIndex(currentIndex + 1);
                setAnswered(false);
                setMessage("");
              }}
            >
              Next Question
            </button>
          ) : (
            <p>Quiz finished 🎉</p>
          )}
        </div>
      )}

      <p>{message}</p>
    </div>
  );
}

export default Challenge;