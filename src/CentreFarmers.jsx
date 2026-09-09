import React from "react";

function CentreFarmers({ onBack }) {
  const farmers = [
    {
      token: "A090",
      name: "Ramesh Kumar",
      mobile: "9876543210",
      crop: "Paddy",
      status: "Serving",
    },
    {
      token: "A091",
      name: "Suresh Reddy",
      mobile: "9876543211",
      crop: "Paddy",
      status: "Waiting",
    },
    {
      token: "A092",
      name: "Lakshmi Devi",
      mobile: "9876543212",
      crop: "Cotton",
      status: "Waiting",
    },
    {
      token: "A093",
      name: "Ravi Kumar",
      mobile: "9876543213",
      crop: "Maize",
      status: "Waiting",
    },
    {
      token: "A094",
      name: "Anitha",
      mobile: "9876543214",
      crop: "Paddy",
      status: "Waiting",
    },
    {
      token: "A095",
      name: "Mahesh",
      mobile: "9876543215",
      crop: "Cotton",
      status: "Completed",
    },
  ];

  return (
    <div className="centre-dashboard-page">

      <nav className="dashboard-navbar">
        <div className="logo">
          🌾 <span>KisanMitra</span>
        </div>

        <div className="dashboard-user">
          <span className="user-name">
            🏢 Centre Staff
          </span>
        </div>
      </nav>

      <main className="centre-content">

        <button className="back-btn" onClick={onBack}>
          ← Back to Dashboard
        </button>

        <div className="centre-welcome">
          <div>
            <p className="dashboard-tag">
              TODAY'S FARMERS
            </p>

            <h1>Scheduled Farmers</h1>

            <p>
              View farmers scheduled for procurement today.
            </p>
          </div>
        </div>

        <section className="centre-queue-section">

          <div className="centre-section-header">
            <div>
              <p className="dashboard-tag">
                FARMER LIST
              </p>

              <h2>Today's Procurement Farmers</h2>
            </div>

            <span className="live-badge">
              ● 48 FARMERS
            </span>
          </div>

          <div className="queue-table">

            <div className="queue-row queue-heading">
              <span>Token</span>
              <span>Farmer</span>
              <span>Mobile</span>
              <span>Crop</span>
              <span>Status</span>
            </div>

            {farmers.map((farmer) => (
              <div className="queue-row" key={farmer.token}>

                <strong>{farmer.token}</strong>

                <span>{farmer.name}</span>

                <span>{farmer.mobile}</span>

                <span>🌾 {farmer.crop}</span>

                <span
                  className={
                    farmer.status === "Serving"
                      ? "serving-status"
                      : farmer.status === "Completed"
                      ? "completed-status"
                      : "waiting-status"
                  }
                >
                  {farmer.status}
                </span>

              </div>
            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default CentreFarmers;