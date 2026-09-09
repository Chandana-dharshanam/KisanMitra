import React, { useState } from "react";

function FarmerRegister({ onBack, onLogin }) {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [village, setVillage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !name ||
      !mobile ||
      !village ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all the fields");
      return;
    }

    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration successful!");

    onLogin();
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

          <h1>
            Farmer Registration
          </h1>

          <p>
            Create your KisanMitra farmer account
          </p>

        </div>


        <form onSubmit={handleRegister}>

          {/* Name */}

          <div className="form-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          </div>


          {/* Mobile */}

          <div className="form-group">

            <label>
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="Enter 10-digit mobile number"
              maxLength="10"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

          </div>


          {/* Village */}

          <div className="form-group">

            <label>
              Village
            </label>

            <input
              type="text"
              placeholder="Enter your village"
              value={village}
              onChange={(e) => setVillage(e.target.value)}
            />

          </div>


          {/* Password */}

          <div className="form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>


          {/* Confirm Password */}

          <div className="form-group">

            <label>
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />

          </div>


          <button
            type="submit"
            className="login-btn"
          >
            Create Account
          </button>

        </form>


        <div className="register-text">

          Already have an account?

          <button
            className="register-btn"
            onClick={onLogin}
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
}

export default FarmerRegister;