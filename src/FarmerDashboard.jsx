import React from "react";

function FarmerDashboard({
  onLogout,
  onBookSlot,
  onLiveQueue,
  onStatus,
  onProfile,
}) {
  return (
    <div className="dashboard-page">

      {/* NAVBAR */}

      <nav className="dashboard-navbar">

        <div className="logo">
          🌾 <span>KisanMitra</span>
        </div>

        <div className="dashboard-user">

          <span className="user-name">
            👨‍🌾 Farmer
          </span>

          <button
            className="logout-btn"
            onClick={onLogout}
          >
            Logout
          </button>

        </div>

      </nav>


      <main className="dashboard-content">

        {/* WELCOME */}

        <div className="welcome-section">

          <div>

            <p className="dashboard-tag">
              FARMER DASHBOARD
            </p>

            <h1>
              Welcome, Farmer! 👋
            </h1>

            <p>
              Manage your procurement activities from one place.
            </p>

          </div>

        </div>


        {/* QUICK ACTIONS */}

        <section className="dashboard-section">

          <h2>Quick Actions</h2>

          <div className="dashboard-grid">


            {/* BOOK SLOT */}

            <div className="dashboard-card">

              <div className="dashboard-card-icon">
                📅
              </div>

              <h3>
                Book Procurement Slot
              </h3>

              <p>
                Select a convenient date and time
                to visit the procurement centre.
              </p>

              <button
                className="dashboard-action-btn"
                onClick={onBookSlot}
              >
                Book Slot →
              </button>

            </div>


            {/* LIVE QUEUE */}

            <div className="dashboard-card">

              <div className="dashboard-card-icon">
                🎟️
              </div>

              <div className="card-title-row">
                <h3>Live Queue</h3>
                <span className="live-badge">● LIVE</span>
              </div>

              <p>
                Check your current token and
                position in the queue.
              </p>

              <button
                className="dashboard-action-btn"
                onClick={onLiveQueue}
              >
                View Queue →
              </button>

            </div>


            {/* PROCUREMENT STATUS */}

            <div className="dashboard-card">

              <div className="dashboard-card-icon">
                📦
              </div>

              <h3>
                Procurement Status
              </h3>

              <p>
                Track your crop procurement
                and payment status.
              </p>

              <button
                className="dashboard-action-btn"
                onClick={onStatus}
              >
                View Status →
              </button>

            </div>


            {/* PROFILE */}

            <div className="dashboard-card">

              <div className="dashboard-card-icon">
                👤
              </div>

              <h3>
                My Profile
              </h3>

              <p>
                View and manage your farmer
                account information.
              </p>

              <button
                className="dashboard-action-btn"
                onClick={onProfile}
              >
                View Profile →
              </button>

            </div>

          </div>

        </section>


        {/* CURRENT BOOKING */}

        <section className="current-booking">

          <div className="booking-header">

            <div>

              <p className="dashboard-tag">
                TODAY'S STATUS
              </p>

              <h2>
                Your Current Booking
              </h2>

            </div>

            <span className="status-badge">
              ✓ Confirmed
            </span>

          </div>


          <div className="booking-details">

            <div>
              <span>Token Number</span>
              <strong>A103</strong>
            </div>

            <div>
              <span>Procurement Centre</span>
              <strong>
                Kisan Procurement Centre
              </strong>
            </div>

            <div>
              <span>Date</span>
              <strong>10 Sep 2026</strong>
            </div>

            <div>
              <span>Estimated Wait</span>
              <strong>30 min</strong>
            </div>

          </div>

        </section>


        {/* SMALL SUMMARY */}

        <div className="dashboard-summary">

          <div>
            <span>Today's Queue</span>
            <strong>12 Farmers</strong>
          </div>

          <div>
            <span>Current Token</span>
            <strong>A090</strong>
          </div>

          <div>
            <span>Your Position</span>
            <strong>13</strong>
          </div>

          <div>
            <span>Centre Status</span>
            <strong className="centre-open">
              ● Open
            </strong>
          </div>

        </div>

      </main>

    </div>
  );
}

export default FarmerDashboard;