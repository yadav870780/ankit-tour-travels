import React from "react";

const testimonials = [
  { id: 1, name: "Rahul Sharma", feedback: "Best travel experience ever!", rating: 5 },
  { id: 2, name: "Priya Singh", feedback: "Amazing service and guides!", rating: 5 },
  { id: 3, name: "Amit Verma", feedback: "Highly recommend Ankit Travels.", rating: 4 },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <p className="mb-4">&quot;{t.feedback}&quot;</p>
              <h3 className="font-semibold">{t.name}</h3>
              <p>{"⭐".repeat(t.rating)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
