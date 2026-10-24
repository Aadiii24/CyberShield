import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");

  function checkStrength(value) {
    if (value.length < 6) return "Weak";
    if (value.length < 10) return "Medium";
    return "Strong";
  }

  return (
    <div className="page-content">
      <h1>Password Strength Checker</h1>

      <div className="auth-card">
        <input
          type="password"
          placeholder="Enter a sample password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {password && <p>Strength: {checkStrength(password)}</p>}
      </div>
    </div>
  );
}

export default PasswordChecker;