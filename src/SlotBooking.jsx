import React, { useState } from "react";

function SlotBooking({ onBack, onDashboard }) {
  const [centre, setCentre] = useState("");
  const [crop, setCrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();

    if (!centre || !crop || !date || !time) {
      alert("Please select all the booking details");
      return;
    }

    setBookingConfirmed(true);
  };

  if (bookingConfirmed) {
    return (
      <div className="slot-page">
        <button className="back-btn" onClick={onDashboard}>
          ← Back to Dashboard
        </button>

        <div className="booking-success">
          <div className="success-icon">🎉</div>

          <h1>Booking Confirmed!</h1>

          <p className="success-message">
            Your procurement slot has been successfully booked.
          </p>

          <div className="booking-token">
            <span>Token Number</span>
            <strong>A103</strong>
          </div>

          <div className="confirmed-details">
            <div>
              <span>Procurement Centre</span>
              <strong>{centre}</strong>
            </div>

            <div>
              <span>Crop</span>
              <strong>{crop}</strong>
            </div>

            <div>
              <span>Date</span>
              <strong>{date}</strong>
            </div>

            <div>
              <span>Time Slot</span>
              <strong>{time}</strong>
            </div>

            <div>
              <span>Queue Position</span>
              <strong>13</strong>
            </div>

            <div>
              <span>Estimated Wait</span>
              <strong>30 min</strong>
            </div>
          </div>

          <button className="login-btn" onClick={onDashboard}>
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="slot-page">
      <button className="back-btn" onClick={onBack}>
        ← Back to Dashboard
      </button>

      <div className="slot-container">

        <div className="slot-header">
          <div className="slot-icon">📅</div>

          <h1>Smart Slot Booking</h1>

          <p>
            Book your convenient procurement visit and avoid long waiting
            queues.
          </p>
        </div>

        <form onSubmit={handleBooking}>

          {/* Procurement Centre */}

          <div className="form-group">
            <label>Procurement Centre</label>

            <select
              value={centre}
              onChange={(e) => setCentre(e.target.value)}
            >
              <option value="">Select Procurement Centre</option>
              <option value="Kisan Procurement Centre">
                Kisan Procurement Centre
              </option>
              <option value="Rythu Vedika Procurement Centre">
                Rythu Vedika Procurement Centre
              </option>
              <option value="Agricultural Market Centre">
                Agricultural Market Centre
              </option>
            </select>
          </div>

          {/* Crop */}

          <div className="form-group">
            <label>Crop</label>

            <select
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
            >
              <option value="">Select Crop</option>
              <option value="Paddy">Paddy</option>
              <option value="Wheat">Wheat</option>
              <option value="Cotton">Cotton</option>
              <option value="Maize">Maize</option>
              <option value="Soybean">Soybean</option>
            </select>
          </div>

          {/* Date */}

          <div className="form-group">
            <label>Select Date</label>

            <input
              type="date"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Time Slots */}

          <div className="form-group">
            <label>Select Time Slot</label>

            <div className="time-slots">

              {[
                "09:00 AM",
                "10:00 AM",
                "11:00 AM",
                "02:00 PM",
                "03:00 PM",
                "04:00 PM",
              ].map((slot) => (
                <button
                  type="button"
                  key={slot}
                  className={`time-slot ${
                    time === slot ? "selected-slot" : ""
                  }`}
                  onClick={() => setTime(slot)}
                >
                  {slot}
                </button>
              ))}

            </div>
          </div>

          <button type="submit" className="login-btn">
            Confirm Booking
          </button>

        </form>
      </div>
    </div>
  );
}

export default SlotBooking;