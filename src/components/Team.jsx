import React from "react";
import TeamCard from "./TeamCard";
import Badge from "./Badge";

const Team = () => {
  return (
    <section id="attorneys" className="py-20 bg-slate-50 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge text="Our Team" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Meet Our Attorneys
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our experienced legal team brings decades of combined expertise and
            a proven track record of success.
          </p>
        </div>

        <TeamCard />
      </div>
    </section>
  );
};

export default Team;
