import { useEffect, useState } from "react";

function BowlChallenge() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    fetch("http://localhost:8080/api/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  useEffect(() => {
    if (!questions.length) return;

    if (timeLeft === 0) {
      submitAnswer();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, questions]);

  const submitAnswer = () => {
    const currentQuestion = questions[currentIndex];

    fetch("http://localhost:8080/api/submissions/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: "Player1",
        questionId: currentQuestion.id,
        submittedAnswer: answer
      })
    });

    nextQuestion();
  };

  const nextQuestion = () => {
    setAnswer("");
    setTimeLeft(15);
    setCurrentIndex((prev) => prev + 1);
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Bowl Challenge</h2>

      {currentQuestion ? (
        <>
          <h3>{currentQuestion.questionText}</h3>
          <p>Time Left: {timeLeft}</p>

          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Your answer"
          />

          <br /><br />

          <button onClick={submitAnswer}>Submit Fast</button>
        </>
      ) : (
        <h3>Finished!</h3>
      )}
    </div>
  );
}

export default BowlChallenge;