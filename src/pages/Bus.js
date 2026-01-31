import React, { useState } from "react";
import busData from "./data/busData.js";

function Bus() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const filteredBuses = busData.filter(
    (bus) =>
      bus.from.toLowerCase().includes(from.toLowerCase()) &&
      bus.to.toLowerCase().includes(to.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Buses</h2>

      {/* Search Bar */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>

      {/* Bus List */}
      {filteredBuses.length === 0 && <p>No buses found</p>}

      {filteredBuses.map((bus) => (
        <div
          key={bus.id}
          style={{
            background: "#fff",
            padding: "15px",
            marginBottom: "12px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{bus.busName}</h3>
          <p>
            {bus.from} → {bus.to} ({bus.distance})
          </p>
          <p>
            ⏰ {bus.departure} – {bus.arrival} ({bus.duration})
          </p>
          <p>🚌 {bus.type}</p>
          <h4>₹{bus.price}</h4>

          <button style={{ marginTop: "10px" }}>Book Seat</button>
        </div>
      ))}
    </div>
  );
}

export default Bus;
