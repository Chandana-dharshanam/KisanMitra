import React, { useState } from "react";

function CentreLogin({ onBack, onLoginSuccess }) {
  const [centreId, setCentreId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!centreId || !password) {
      alert("Please enter Centre ID and Password");
      return;
    }

    // Prototype login
    onLoginSuccess();
  };

  return (
    <div className="login-page">

      <button className="back-btn" onClick={onBack}>
        ← Back to Home
      </button>

      <div className="login-container">

        <div className="login-header">

          <div className="login-icon">
            🏢
          </div>

          <h1>
            Centre Login
          </h1>

          <p>
            Login to manage your procurement centre
          </p>

        </div>

        <form onSubmit={handleLogin}>

          <div className="form-group">

            <label>
              Centre ID
            </label>

            <input
              type="text"
              placeholder="Enter Centre ID"
              value={centreId}
              onChange={(e) => setCentreId(e.target.value)}
            />

          </div>

          <div className="form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

        <div className="register-text">
          <span>
            Demo Centre ID: KPC001
          </span>
        </div>

      </div>

    </div>
  );
}

export default CentreLogin;