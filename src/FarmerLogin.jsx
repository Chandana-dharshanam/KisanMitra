import React, { useState } from "react";

function FarmerLogin({ onBack, onRegister, onLoginSuccess }) {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!mobile || !password) {
      alert("Please enter mobile number and password");
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
            👨‍🌾
          </div>

          <h1>Farmer Login</h1>

          <p>
            Login to access your KisanMitra account
          </p>

        </div>

        <form onSubmit={handleLogin}>

          <div className="form-group">

            <label>
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="Enter your mobile number"
              maxLength="10"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

          </div>

          <div className="form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
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

          Don't have an account?

          <button
            className="register-btn"
            onClick={onRegister}
          >
            Create Account
          </button>

        </div>

      </div>

    </div>
  );
}

export default FarmerLogin;