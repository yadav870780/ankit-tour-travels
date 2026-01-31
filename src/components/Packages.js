import React from "react";


function Packages() {
  return (
    <section className="packages">
      <h2>Popular Packages</h2>
      <div className="package-cards">
        <div className="package-card">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Goa"/>
          <h4>Goa Beach Trip</h4>
          <p>₹5000 • 3 Nights / 4 Days</p>
        </div>
        <div className="package-card">
          <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff" alt="Himachal"/>
          <h4>Himachal Hills</h4>
          <p>₹7000 • 4 Nights / 5 Days</p>
        </div>
        <div className="package-card">
          <img src="https://images.unsplash.com/photo-1582719478250-40f79d5ee7f5" alt="Rajasthan"/>
          <h4>Rajasthan Tour</h4>
          <p>₹8000 • 5 Nights / 6 Days</p>
        </div>
      </div>
    </section>
  );
}

export default Packages;
