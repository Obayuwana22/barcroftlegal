import { Award, ChevronRight } from "lucide-react";
import React from "react";
import { assets } from "../../data";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-text-dark via-slate-800 to-text-dark text-white py-24"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="px-3 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 max-w-fit hover:bg-transparent">
                Trusted Legal Excellence Since 1985
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Trusted Legal
                <span className="text-amber-400"> Advocates</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Expert Legal Solutions. Industry Insight. Trusted Results. At{" "}
                <span className="font-bold">Barcroftlegal</span>, we deliver
                comprehensive legal services tailored to the complexities of
                Nigeria’s economic landscape. Whether you're navigating
                regulatory frameworks, closing high-stakes transactions, or
                resolving critical disputes, our team of seasoned legal
                professionals is equipped to guide you from start to finish. We
                operate at the intersection of law, business, and policy—across
                energy, maritime, and the public sector.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 ">
              <a href="#contact" className="">
                <button className="flex items-center justify-center py-3 rounded-md bg-amber-500 hover:bg-amber-600 transition duration-300 text-text-dark font-semibold cursor-pointer md:px-10">
                  Schedule Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </a>
              <button className="border border-white py-3 text-white rounded-md  hover:bg-white hover:text-text-dark transition duration-300 bg-transparent font-semibold cursor-pointer md:px-10">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">500+</div>
                <div className="text-sm text-slate-300">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">35+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">98%</div>
                <div className="text-sm text-slate-300">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={assets.placeholder}
              alt="Professional legal team"
              width={500}
              height={600}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-text-dark">
                    Award Winning
                  </div>
                  <div className="text-sm text-slate-600">
                    Top Rated Law Firm 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
