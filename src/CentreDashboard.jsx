import React from "react";

function CentreDashboard({ onLogout }) {
  return (
    <div className="centre-dashboard-page">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="dashboard-navbar">

        <div className="logo">
          🌾 <span>KisanMitra</span>
        </div>

        <div className="dashboard-user">

          <span className="user-name">
            🏢 Centre Staff
          </span>

          <button
            className="logout-btn"
            onClick={onLogout}
          >
            Logout
          </button>

        </div>

      </nav>


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="centre-content">

        {/* WELCOME */}

        <div className="centre-welcome">

          <div>

            <p className="dashboard-tag">
              PROCUREMENT CENTRE
            </p>

            <h1>
              Kisan Procurement Centre
            </h1>

            <p>
              Manage farmers, slots, queues and procurement activities.
            </p>

          </div>

          <div className="centre-status">
            <span className="centre-status-dot"></span>
            Centre Open
          </div>

        </div>


        {/* =========================
            SUMMARY
        ========================= */}

        <section className="centre-summary">

          <div className="centre-summary-card">

            <div className="centre-summary-icon">
              👥
            </div>

            <div>
              <span>
                Today's Farmers
              </span>

              <strong>
                48
              </strong>

              <small>
                +8 from yesterday
              </small>
            </div>

          </div>


          <div className="centre-summary-card">

            <div className="centre-summary-icon">
              🎟️
            </div>

            <div>
              <span>
                Waiting Queue
              </span>

              <strong>
                12
              </strong>

              <small>
                Farmers waiting
              </small>
            </div>

          </div>


          <div className="centre-summary-card">

            <div className="centre-summary-icon">
              📅
            </div>

            <div>
              <span>
                Today's Slots
              </span>

              <strong>
                36
              </strong>

              <small>
                28 completed
              </small>
            </div>

          </div>


          <div className="centre-summary-card">

            <div className="centre-summary-icon">
              📦
            </div>

            <div>
              <span>
                Procurement
              </span>

              <strong>
                4.2T
              </strong>

              <small>
                Processed today
              </small>
            </div>

          </div>

        </section>


        {/* =========================
            QUICK ACTIONS
        ========================= */}

        <section className="centre-section">

          <h2>
            Centre Operations
          </h2>

          <div className="centre-grid">


            {/* FARMERS */}

            <div className="centre-card">

              <div className="centre-card-icon">
                👥
              </div>

              <h3>
                Today's Farmers
              </h3>

              <p>
                View farmers scheduled for procurement today.
              </p>

              <button className="centre-action-btn">
                View Farmers →
              </button>

            </div>


            {/* QUEUE */}

            <div className="centre-card">

              <div className="centre-card-icon">
                🎟️
              </div>

              <h3>
                Live Queue
              </h3>

              <p>
                Manage the current farmer queue and tokens.
              </p>

              <button className="centre-action-btn">
                Manage Queue →
              </button>

            </div>


            {/* SLOTS */}

            <div className="centre-card">

              <div className="centre-card-icon">
                📅
              </div>

              <h3>
                Today's Slots
              </h3>

              <p>
                View and manage today's procurement bookings.
              </p>

              <button className="centre-action-btn">
                View Slots →
              </button>

            </div>


            {/* PROCUREMENT */}

            <div className="centre-card">

              <div className="centre-card-icon">
                📦
              </div>

              <h3>
                Procurement
              </h3>

              <p>
                Process crop weighing and quality verification.
              </p>

              <button className="centre-action-btn">
                Manage Procurement →
              </button>

            </div>


            {/* PAYMENTS */}

            <div className="centre-card">

              <div className="centre-card-icon">
                💰
              </div>

              <h3>
                Payments
              </h3>

              <p>
                View and manage farmer payment processing.
              </p>

              <button className="centre-action-btn">
                View Payments →
              </button>

            </div>

          </div>

        </section>


        {/* =========================
            CURRENT QUEUE
        ========================= */}

        <section className="centre-queue-section">

          <div className="centre-section-header">

            <div>

              <p className="dashboard-tag">
                LIVE
              </p>

              <h2>
                Current Queue
              </h2>

            </div>

            <span className="live-badge">
              ● LIVE
            </span>

          </div>


          <div className="queue-table">

            <div className="queue-row queue-heading">

              <span>
                Token
              </span>

              <span>
                Farmer
              </span>

              <span>
                Crop
              </span>

              <span>
                Status
              </span>

            </div>


            <div className="queue-row">

              <strong>
                A090
              </strong>

              <span>
                Ramesh Kumar
              </span>

              <span>
                🌾 Paddy
              </span>

              <span className="serving-status">
                Serving
              </span>

            </div>


            <div className="queue-row">

              <strong>
                A091
              </strong>

              <span>
                Suresh Reddy
              </span>

              <span>
                🌾 Paddy
              </span>

              <span className="waiting-status">
                Waiting
              </span>

            </div>


            <div className="queue-row">

              <strong>
                A092
              </strong>

              <span>
                Lakshmi Devi
              </span>

              <span>
                🌱 Cotton
              </span>

              <span className="waiting-status">
                Waiting
              </span>

            </div>


            <div className="queue-row">

              <strong>
                A093
              </strong>

              <span>
                Ravi Kumar
              </span>

              <span>
                🌽 Maize
              </span>

              <span className="waiting-status">
                Waiting
              </span>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default CentreDashboard;