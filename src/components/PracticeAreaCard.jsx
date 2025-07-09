import React from "react";
import { ChevronRight } from "lucide-react";
import { practiceAreaCard } from "../../data";

const PracticeAreaCard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {practiceAreaCard.map((area) => (
        <div
          key={area.id}
          className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md p-5"
        >
          <div className="pb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-slate-100 group-hover:bg-amber-100 p-3 rounded-lg transition-colors">
                <area.icon className="h-8 w-8 text-slate-700 group-hover:text-amber-600" />
              </div>
              {/* <div className="text-xs bg-gray-200 rounded-full px-2 py-1 font-semibold">
                {area.cases}
              </div> */}
            </div>
            <div className="text-xl group-hover:text-amber-600 transition-colors font-semibold">
              {area.title}
            </div>
          </div>
          <div>
            <div className="text-slate-600 leading-relaxed">
              {area.description}
            </div>
            <button className="flex items-center mt-4 p-0 h-auto text-primary-clr hover:text-amber-700">
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PracticeAreaCard;
