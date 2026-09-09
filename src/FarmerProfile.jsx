import React, { useState } from "react";

function FarmerProfile({ onBack }) {
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState("Farmer");
  const [mobile, setMobile] = useState("9876543210");
  const [village, setVillage] = useState("My Village");

  const handleSave = () => {
    setEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">

      <button className="back-btn" onClick={onBack}>
        ← Back to Dashboard
      </button>

      <div className="profile-container">

        <div className="profile-header">

          <div className="profile-avatar">
            👨‍🌾
          </div>

          <p className="dashboard-tag">
            MY PROFILE
          </p>

          <h1>Farmer Profile</h1>

          <p>
            View and manage your KisanMitra account information.
          </p>

        </div>

        <div className="profile-form">

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              value={name}
              disabled={!editing}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>

            <input
              type="tel"
              value={mobile}
              disabled={!editing}
              maxLength="10"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Village</label>

            <input
              type="text"
              value={village}
              disabled={!editing}
              onChange={(e) => setVillage(e.target.value)}
            />
          </div>

          <div className="profile-actions">

            {!editing ? (
              <button
                className="login-btn"
                onClick={() => setEditing(true)}
              >
                ✏️ Edit Profile
              </button>
            ) : (
              <>
                <button
                  className="login-btn"
                  onClick={handleSave}
                >
                  💾 Save Changes
                </button>

                <button
                  className="cancel-btn"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </>
            )}

          </div>

        </div>

        <div className="profile-info">

          <div>
            <span>Account Type</span>
            <strong>Farmer</strong>
          </div>

          <div>
            <span>Account Status</span>
            <strong className="profile-active">
              ● Active
            </strong>
          </div>

        </div>

      </div>
    </div>
  );
}

export default FarmerProfile;