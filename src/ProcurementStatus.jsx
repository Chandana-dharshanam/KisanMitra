import React from "react";

function ProcurementStatus({ onBack }) {
  const steps = [
    {
      title: "Crop Submitted",
      description: "Your crop has been submitted for procurement.",
      icon: "🌾",
      status: "completed",
    },
    {
      title: "Weighing Completed",
      description: "Crop quantity has been successfully recorded.",
      icon: "⚖️",
      status: "completed",
    },
    {
      title: "Quality Check",
      description: "Your crop has passed the quality inspection.",
      icon: "🔍",
      status: "completed",
    },
    {
      title: "Crop Accepted",
      description: "Your crop has been accepted for procurement.",
      icon: "✅",
      status: "completed",
    },
    {
      title: "Payment Processing",
      description: "Payment is currently being processed.",
      icon: "💰",
      status: "active",
    },
    {
      title: "Payment Completed",
      description: "Payment will be credited to your account.",
      icon: "🏦",
      status: "pending",
    },
  ];

  return (
    <div className="status-page">

      <button className="back-btn" onClick={onBack}>
        ← Back to Dashboard
      </button>

      <div className="status-container">

        <div className="status-header">
          <div className="status-main-icon">📦</div>

          <p className="dashboard-tag">
            PROCUREMENT STATUS
          </p>

          <h1>Track Your Crop</h1>

          <p>
            Follow your crop procurement journey from submission
            to payment completion.
          </p>
        </div>

        <div className="crop-summary">

          <div>
            <span>Crop</span>
            <strong>🌾 Paddy</strong>
          </div>

          <div>
            <span>Procurement Centre</span>
            <strong>Kisan Procurement Centre</strong>
          </div>

          <div>
            <span>Token Number</span>
            <strong>A103</strong>
          </div>

        </div>

        <div className="status-timeline">

          {steps.map((step, index) => (
            <div
              className={`status-step ${step.status}`}
              key={step.title}
            >

              <div className="status-step-icon">
                {step.icon}
              </div>

              <div className="status-step-content">

                <div className="status-step-title">
                  <h3>{step.title}</h3>

                  {step.status === "completed" && (
                    <span className="completed-label">
                      Completed
                    </span>
                  )}

                  {step.status === "active" && (
                    <span className="active-label">
                      In Progress
                    </span>
                  )}

                </div>

                <p>{step.description}</p>

              </div>

              {index !== steps.length - 1 && (
                <div className="status-line"></div>
              )}

            </div>
          ))}

        </div>

        <div className="status-note">
          <span>💡</span>
          <p>
            Your payment is being processed. You will receive
            confirmation once the payment is completed.
          </p>
        </div>

      </div>
    </div>
  );
}

export default ProcurementStatus;