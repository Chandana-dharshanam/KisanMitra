import React, { useEffect, useState } from "react";

function LiveQueue({ onBack }) {
  const [peopleAhead, setPeopleAhead] = useState(12);

  // Simulate live queue updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPeopleAhead((current) => {
        if (current <= 0) {
          return 0;
        }

        return current - 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const estimatedWait = peopleAhead * 2.5;

  const progress = Math.max(
    0,
    Math.min(100, ((12 - peopleAhead) / 12) * 100)
  );

  return (
    <div className="queue-page">

      {/* BACK BUTTON */}

      <button className="back-btn" onClick={onBack}>
        ← Back to Dashboard
      </button>

      <div className="queue-container">

        {/* HEADER */}

        <div className="queue-header">

          <div className="queue-icon">
            🎟️
          </div>

          <p className="dashboard-tag">
            LIVE QUEUE TRACKING
          </p>

          <h1>
            Your Queue Status
          </h1>

          <p>
            Track your position in the procurement centre queue.
          </p>

        </div>

        {/* CENTRE */}

        <div className="queue-centre">

          <span>
            🏢 Procurement Centre
          </span>

          <strong>
            Kisan Procurement Centre
          </strong>

        </div>

        {/* TOKEN */}

        <div className="token-section">

          <span>
            Your Token Number
          </span>

          <strong>
            A103
          </strong>

        </div>

        {/* QUEUE STATS */}

        <div className="queue-stats">

          <div className="queue-stat-card">

            <div className="stat-icon">
              👥
            </div>

            <span>
              People Ahead
            </span>

            <strong>
              {peopleAhead}
            </strong>

          </div>

          <div className="queue-stat-card">

            <div className="stat-icon">
              🎫
            </div>

            <span>
              Current Serving
            </span>

            <strong>
              A{103 - peopleAhead}
            </strong>

          </div>

          <div className="queue-stat-card">

            <div className="stat-icon">
              ⏱️
            </div>

            <span>
              Estimated Wait
            </span>

            <strong>
              {Math.round(estimatedWait)} min
            </strong>

          </div>

        </div>

        {/* PROGRESS */}

        <div className="queue-progress-section">

          <div className="progress-header">

            <span>
              Queue Progress
            </span>

            <strong>
              {Math.round(progress)}%
            </strong>

          </div>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            ></div>

          </div>

        </div>

        {/* STATUS */}

        <div className="queue-live-status">

          <span className="live-dot"></span>

          <div>
            <strong>
              Queue is updating live
            </strong>

            <p>
              Your position is automatically updated.
            </p>
          </div>

        </div>

        {/* INFORMATION */}

        <div className="queue-info-box">

          <h3>
            💡 Queue Information
          </h3>

          <p>
            Please arrive at the procurement centre
            approximately 10 minutes before your turn.
          </p>

        </div>

      </div>

    </div>
  );
}

export default LiveQueue;