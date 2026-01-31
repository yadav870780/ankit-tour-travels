import React from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  return (
    <section className="services">
      <h2>Our Premium Services</h2>

      <div className="service-cards">

        {/* TAXI */}
        <div className="card" onClick={() => navigate("/taxi")}>
          <span style={{ fontSize: "32px" }}>🚖</span>
          <div>Taxi & Transfers</div>
        </div>

        {/* BUS */}
        <div className="card" onClick={() => navigate("/bus")}>
          <span style={{ fontSize: "32px" }}>🚌</span>
          <div>Bus Booking</div>
        </div>

        {/* TRAVELS */}
        <div className="card" onClick={() => navigate("/travels")}>
          <span style={{ fontSize: "32px" }}>🏖️</span>
          <div>Tour Packages</div>
        </div>

        {/* AIRPORT */}
        <div className="card" onClick={() => navigate("/taxi")}>
          <span style={{ fontSize: "32px" }}>✈️</span>
          <div>Airport Pickup</div>
        </div>

      </div>
    </section>
  );
}

export default Services;
