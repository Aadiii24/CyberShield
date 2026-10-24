import { Link } from "react-router-dom";

function Navbar() {
return ( <nav className="navbar"> <Link to="/" className="logo">
🛡️ CyberShield </Link>

  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/learn">Learn</Link>
    <Link to="/password-checker">Password Checker</Link>
    <Link to="/quiz">Quiz</Link>
    <Link to="/login" className="login-btn">
      Login
    </Link>
  </div>
</nav>

);
}

export default Navbar;
