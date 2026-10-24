function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Stay Safe in the Digital World</h1>
        <p>
          Learn about cyber threats, check your password strength, and improve
          your online security with CyberShield.
        </p>

        <div className="hero-buttons">
          <a href="/login" className="btn btn-primary">
            Secure Login
          </a>

          <a href="/quiz" className="btn btn-secondary">
            Take a Quiz
          </a>
        </div>
      </section>

      <section className="features">
        <h2>What You Can Do</h2>

        <div className="feature-container">
          <div className="feature-card">
            <h3>Threat Awareness</h3>
            <p>Understand phishing, malware, and common online threats.</p>
          </div>

          <div className="feature-card">
            <h3>Password Hygiene</h3>
            <p>Learn how to create stronger, safer passwords.</p>
          </div>

          <div className="feature-card">
            <h3>Cyber Quiz</h3>
            <p>Test your knowledge and improve your digital safety habits.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
