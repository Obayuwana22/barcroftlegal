import React from "react";
import { testimonialsCard } from "../../data";
import { Star } from "lucide-react";

const TestimonialCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonialsCard.map((testimonial) => (
        <div
          key={testimonial.id}
          className="hover:shadow-lg transition-shadow border border-gray-300 rounded-lg"
        >
          <div className="p-5">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
              ))}
            </div>
            <p className="text-slate-600 mb-6 italic">
              "{testimonial.content}"
            </p>
            <div>
              <div className="font-semibold text-slate-900">
                {testimonial.name}
              </div>
              <div className="text-sm text-slate-500">{testimonial.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
