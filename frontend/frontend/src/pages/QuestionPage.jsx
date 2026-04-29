import { useEffect, useState } from "react";

function QuestionPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error loading questions:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bowl Questions</h1>

      {questions.map((question) => (
        <div
          key={question.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px"
          }}
        >
          <h3>{question.questionText}</h3>
          <p><strong>Answer:</strong> {question.answer}</p>
          <p><strong>Difficulty:</strong> {question.difficulty}</p>
          <p><strong>Category:</strong> {question.category}</p>
        </div>
      ))}
    </div>
  );
}

export default QuestionPage;