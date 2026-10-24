function Learn() {
  return (
    <main className="page-content learn-page">
      <section className="learn-hero">
        <span className="auth-badge">Cybersecurity essentials</span>
        <h1>Learn Cybersecurity</h1>
        <p>
          Protect yourself online by understanding the most common threats and the
          habits that keep your accounts safe.
        </p>
      </section>

      <div className="feature-container learning-grid">
        <div className="feature-card">
          <h3>Phishing</h3>
          <p>
            Phishing attacks try to trick you into clicking malicious links or
            sharing sensitive information. Always verify the sender and check the
            URL before acting.
          </p>
        </div>

        <div className="feature-card">
          <h3>Malware</h3>
          <p>
            Malware can infect your device through downloads, fake updates, or
            suspicious email attachments. Keep your software updated and avoid
            untrusted files.
          </p>
        </div>

        <div className="feature-card">
          <h3>Password Safety</h3>
          <p>
            Use unique passwords for each account and combine length, complexity,
            and a password manager to reduce risk dramatically.
          </p>
        </div>

        <div className="feature-card">
          <h3>Two-Factor Authentication</h3>
          <p>
            Add a second step to your login process so even if a password is
            exposed, your account remains protected.
          </p>
        </div>

        <div className="feature-card">
          <h3>Public Wi-Fi</h3>
          <p>
            Avoid logging into banking or work accounts on open Wi-Fi without a
            VPN, and prefer trusted networks whenever possible.
          </p>
        </div>

        <div className="feature-card">
          <h3>Updates & Patching</h3>
          <p>
            Security updates fix known vulnerabilities. Installing them promptly is
            one of the simplest ways to reduce attack risk.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Learn;