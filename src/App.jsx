import "./App.css";
import { useState } from "react";

// Farmer pages
import FarmerLogin from "./FarmerLogin";
import FarmerRegister from "./FarmerRegister";
import FarmerDashboard from "./FarmerDashboard";
import SlotBooking from "./SlotBooking";
import LiveQueue from "./LiveQueue";
import ProcurementStatus from "./ProcurementStatus";
import FarmerProfile from "./FarmerProfile";

// Centre pages
import CentreLogin from "./CentreLogin";
import CentreDashboard from "./CentreDashboard";

function App() {
  const [page, setPage] = useState("home");

  // Language state
  const [language, setLanguage] = useState("en");

  // Toggle English / Telugu
  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === "en" ? "te" : "en"
    );
  };

  // =========================================
  // FARMER LOGIN
  // =========================================

  if (page === "login") {
    return (
      <FarmerLogin
        onBack={() => setPage("home")}
        onRegister={() => setPage("register")}
        onLoginSuccess={() => setPage("dashboard")}
      />
    );
  }

  // =========================================
  // FARMER REGISTRATION
  // =========================================

  if (page === "register") {
    return (
      <FarmerRegister
        onBack={() => setPage("home")}
        onLogin={() => setPage("login")}
      />
    );
  }

  // =========================================
  // FARMER DASHBOARD
  // =========================================

  if (page === "dashboard") {
    return (
      <FarmerDashboard
        onLogout={() => setPage("home")}
        onBookSlot={() => setPage("slotBooking")}
        onLiveQueue={() => setPage("liveQueue")}
        onStatus={() => setPage("procurementStatus")}
        onProfile={() => setPage("profile")}
      />
    );
  }

  // =========================================
  // SLOT BOOKING
  // =========================================

  if (page === "slotBooking") {
    return (
      <SlotBooking
        onBack={() => setPage("dashboard")}
        onDashboard={() => setPage("dashboard")}
      />
    );
  }

  // =========================================
  // LIVE QUEUE
  // =========================================

  if (page === "liveQueue") {
    return (
      <LiveQueue
        onBack={() => setPage("dashboard")}
      />
    );
  }

  // =========================================
  // PROCUREMENT STATUS
  // =========================================

  if (page === "procurementStatus") {
    return (
      <ProcurementStatus
        onBack={() => setPage("dashboard")}
      />
    );
  }

  // =========================================
  // FARMER PROFILE
  // =========================================

  if (page === "profile") {
    return (
      <FarmerProfile
        onBack={() => setPage("dashboard")}
      />
    );
  }

  // =========================================
  // CENTRE LOGIN
  // =========================================

  if (page === "centreLogin") {
    return (
      <CentreLogin
        onBack={() => setPage("home")}
        onLoginSuccess={() => setPage("centreDashboard")}
      />
    );
  }

  // =========================================
  // CENTRE DASHBOARD
  // =========================================

  if (page === "centreDashboard") {
    return (
      <CentreDashboard
        onLogout={() => setPage("home")}
      />
    );
  }

  // =========================================
  // HOME PAGE
  // =========================================

  return (
    <div className="app">

      {/* =====================================
          NAVBAR
      ===================================== */}

      <nav className="navbar">

        <div className="logo">
          🌾 <span>KisanMitra</span>
        </div>

        <div className="nav-links">

          <a href="#home">
            {language === "en" ? "Home" : "హోమ్"}
          </a>

          <a href="#features">
            {language === "en" ? "Services" : "సేవలు"}
          </a>

          <a href="#about">
            {language === "en" ? "About" : "మా గురించి"}
          </a>

          {/* LANGUAGE BUTTON */}

          <button
            className="language-btn"
            onClick={toggleLanguage}
          >
            🌐{" "}
            {language === "en"
              ? "తెలుగు"
              : "English"}
          </button>

        </div>
      </nav>


      {/* =====================================
          HERO SECTION
      ===================================== */}

      <main className="hero" id="home">

        <div className="hero-content">

          <p className="tag">
            {language === "en"
              ? "SMART PROCUREMENT MANAGEMENT"
              : "స్మార్ట్ సేకరణ నిర్వహణ"}
          </p>


          <h1>

            {language === "en" ? (
              <>
                Skip the Queue.
                <br />
                <span>Grow More.</span>
              </>
            ) : (
              <>
                క్యూను దాటండి.
                <br />
                <span>మరింత అభివృద్ధి చెందండి.</span>
              </>
            )}

          </h1>


          <p className="description">

            {language === "en"
              ? "KisanMitra helps farmers book procurement slots, track live queues, monitor crop procurement, and save valuable time."
              : "కిసాన్‌మిత్ర రైతులకు సేకరణ స్లాట్‌లను బుక్ చేసుకోవడానికి, ప్రత్యక్ష క్యూను ట్రాక్ చేయడానికి, పంట సేకరణను పర్యవేక్షించడానికి మరియు విలువైన సమయాన్ని ఆదా చేయడానికి సహాయపడుతుంది."}

          </p>


          {/* BUTTONS */}

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => setPage("login")}
            >
              👨‍🌾{" "}
              {language === "en"
                ? "Farmer Login"
                : "రైతు లాగిన్"}
            </button>


            <button
              className="secondary-btn"
              onClick={() => setPage("centreLogin")}
            >
              🏢{" "}
              {language === "en"
                ? "Centre Login"
                : "కేంద్రం లాగిన్"}
            </button>

          </div>

        </div>


        {/* =====================================
            HERO CARD
        ===================================== */}

        <div className="hero-image">

          <div className="farmer-card">

            <div className="icon">
              🌾
            </div>


            <h2>
              {language === "en"
                ? "Your Time Matters"
                : "మీ సమయం విలువైనది"}
            </h2>


            <p>
              {language === "en"
                ? "Book your slot and know exactly when to visit the procurement centre."
                : "మీ స్లాట్‌ను బుక్ చేసుకుని, సేకరణ కేంద్రాన్ని ఎప్పుడు సందర్శించాలో ఖచ్చితంగా తెలుసుకోండి."}
            </p>


            <div className="queue-info">

              <span>
                {language === "en"
                  ? "Current Queue"
                  : "ప్రస్తుత క్యూ"}
              </span>

              <strong>
                {language === "en"
                  ? "12 Farmers"
                  : "12 మంది రైతులు"}
              </strong>

            </div>


            <div className="waiting-info">

              <span>
                {language === "en"
                  ? "Estimated Wait"
                  : "అంచనా వేచి ఉండే సమయం"}
              </span>

              <strong>
                {language === "en"
                  ? "25 min"
                  : "25 నిమిషాలు"}
              </strong>

            </div>

          </div>

        </div>

      </main>


      {/* =====================================
          FEATURES SECTION
      ===================================== */}

      <section
        className="features"
        id="features"
      >

        <h2>
          {language === "en"
            ? "Everything Farmers Need in One Place"
            : "రైతులకు అవసరమైన ప్రతిదీ ఒకే చోట"}
        </h2>


        <div className="feature-grid">


          {/* FEATURE 1 */}

          <div className="feature-card">

            <div className="feature-icon">
              📅
            </div>

            <h3>
              {language === "en"
                ? "Smart Slot Booking"
                : "స్మార్ట్ స్లాట్ బుకింగ్"}
            </h3>

            <p>
              {language === "en"
                ? "Book a convenient procurement slot and avoid long waiting."
                : "అనుకూలమైన సేకరణ స్లాట్‌ను బుక్ చేసుకుని ఎక్కువసేపు వేచి ఉండటాన్ని నివారించండి."}
            </p>

          </div>


          {/* FEATURE 2 */}

          <div className="feature-card">

            <div className="feature-icon">
              🎟️
            </div>

            <h3>
              {language === "en"
                ? "Live Queue Tracking"
                : "ప్రత్యక్ష క్యూ ట్రాకింగ్"}
            </h3>

            <p>
              {language === "en"
                ? "Track your token and know your position in the queue."
                : "మీ టోకెన్‌ను ట్రాక్ చేసి, క్యూలో మీ స్థానాన్ని తెలుసుకోండి."}
            </p>

          </div>


          {/* FEATURE 3 */}

          <div className="feature-card">

            <div className="feature-icon">
              📦
            </div>

            <h3>
              {language === "en"
                ? "Procurement Status"
                : "సేకరణ స్థితి"}
            </h3>

            <p>
              {language === "en"
                ? "Track your crop from weighing to payment completion."
                : "మీ పంట బరువు కొలత నుండి చెల్లింపు పూర్తయ్యే వరకు ట్రాక్ చేయండి."}
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          ABOUT SECTION
      ===================================== */}

      <section
        id="about"
        className="about-section"
      >

        <h2>
          {language === "en"
            ? "About KisanMitra"
            : "కిసాన్‌మిత్ర గురించి"}
        </h2>


        <p>
          {language === "en"
            ? "KisanMitra is a smart procurement management platform designed to help farmers save time, avoid long queues, and track their crop procurement journey."
            : "కిసాన్‌మిత్ర అనేది రైతులు సమయాన్ని ఆదా చేసుకోవడానికి, ఎక్కువసేపు క్యూలో వేచి ఉండటాన్ని నివారించడానికి మరియు వారి పంట సేకరణ ప్రయాణాన్ని ట్రాక్ చేయడానికి రూపొందించబడిన స్మార్ట్ సేకరణ నిర్వహణ వేదిక."}
        </p>

      </section>

    </div>
  );
}

export default App;