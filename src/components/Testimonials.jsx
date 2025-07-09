import React from "react";
import TestimonialCard from "./TestimonialCard";
import Badge from "./Badge";

const Testimonials = () => {
  return (
    <section className="py-20 bg-bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge text=" Client Testimonials" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
        </div>
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
