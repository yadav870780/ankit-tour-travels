import React from "react";
import package1 from "../assets/package1.jpg";
import package2 from "../assets/package2.jpg";
import package3 from "../assets/package3.jpg";

const packages = [
  { id: 1, title: "Goa Beach Escape", price: "₹12,999", img: package1 },
  { id: 2, title: "Himalaya Adventure", price: "₹24,999", img: package2 },
  { id: 3, title: "Kerala Backwaters", price: "₹18,499", img: package3 },
];

const Packages = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Popular Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
              <img src={pkg.img} alt={pkg.title} className="w-full h-60 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-yellow-500 font-bold text-lg">{pkg.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
