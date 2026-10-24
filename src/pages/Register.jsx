import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="auth-header">
          <span className="auth-badge">Create account</span>
          <h2>Join CyberShield</h2>
          <p>Start protecting your digital life.</p>
        </div>

        <form className="auth-form">
          <label>
            Full name
            <input type="text" placeholder="John Doe" required />
          </label>

          <label>
            Email address
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Password
            <input type="password" placeholder="Create a secure password" required />
          </label>

          <button type="submit" className="primary-btn">Register</button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login" className="text-link">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
