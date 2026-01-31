import React, { useState } from "react";

function Taxi() {
  const [km, setKm] = useState(0);

  const pricePerKm = 12;
  const totalPrice = km * pricePerKm;

  return (
    <div className="page">
      <h2>🚖 Taxi Booking</h2>

      <div className="search-bar">
        <input placeholder="Pickup Location" />
        <input placeholder="Drop Location" />
        <input type="date" />
        <input
          type="number"
          placeholder="Distance (KM)"
          onChange={(e) => setKm(e.target.value)}
        />
      </div>

      <div className="result-card">
        <p>🚗 Sedan AC</p>
        <p>📏 Distance: {km} KM</p>
        <p>💰 ₹{pricePerKm} per KM</p>
        <h3>Total: ₹{totalPrice}</h3>
        <button>Book Taxi</button>
      </div>
    </div>
  );
}

export default Taxi;
