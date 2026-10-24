import { useState } from "react";

function Quiz() {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="page-content">
      <h1>Cybersecurity Quiz</h1>

      <div className="auth-card">
        <p>Which of these is a sign of a phishing email?</p>

        {["Urgent request for your password", "Normal greeting", "Expected receipt"].map((option) => (
          <label key={option} className="quiz-option">
            <input
              type="radio"
              name="answer"
              value={option}
              onChange={(e) => setAnswer(e.target.value)}
            />
            {option}
          </label>
        ))}

        <button onClick={() => setSubmitted(true)}>Submit</button>

        {submitted && (
          <p>
            {answer === "Urgent request for your password"
              ? "Correct answer!"
              : "Try again. Look for suspicious requests."}
          </p>
        )}
      </div>
    </div>
  );
}

export default Quiz;