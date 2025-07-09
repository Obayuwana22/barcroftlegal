import React from "react";
import PracticeAreaCard from "./PracticeAreaCard";
import Badge from "./Badge";

const PracticeArea = () => {
  return (
    <section id="practice-areas" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <Badge text="Our Expertise" className="mx-auto" />

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Practice Areas
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide comprehensive legal services across multiple practice
            areas, delivering expert representation tailored to your specific
            needs.
          </p>
        </div>
        <PracticeAreaCard />
      </div>
    </section>
  );
};

export default PracticeArea;
