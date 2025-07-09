import React from "react";
import { assets, teamCard } from "../../data";
import { Award, Clock } from "lucide-react";

const TeamCard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {teamCard.map((attorney) => (
        <div
          key={attorney.id}
          className="text-center hover:shadow-xl transition-all duration-300 border border-gray-300 rounded-lg pb-5"
        >
          <div className="pt-8">
            <img
              src={assets.placeholder}
              alt={attorney.name}
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 shadow-lg"
            />
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {attorney.name}
            </h3>
            <p className="text-amber-600 font-semibold mb-2">
              {attorney.title}
            </p>
            <p className="text-slate-600 mb-4">{attorney.specialization}</p>
            <div className="space-y-2 text-sm text-slate-500">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{attorney.experience}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award className="h-4 w-4" />
                <span>{attorney.education}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
