import React from "react";
import Badge from "./Badge";
import { assets } from "../../data";
import { Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <Badge text="About Our Firm" />
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Dedicated to Justice and Excellence
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Driven by Expertise. Committed to Excellence. Barcroftlegal is a
                full-service Nigerian law firm offering strategic legal support
                to clients across key sectors of the economy. With a deep
                understanding of industry dynamics and a strong grasp of
                regulatory environments, we provide practical, commercially
                focused legal solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our multidisciplinary team blends legal proficiency with
                sector-specific knowledge, enabling us to support clients
                through every stage of the value chain—from project development
                and financing to compliance, operations, and dispute resolution.
                We are proud to partner with corporations, government
                institutions, investors, and entrepreneurs committed to success
                in Nigeria’s dynamic business and regulatory environment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-clr mb-2">
                  20+
                </div>
                <div className="text-slate-700 font-medium">
                  Years of Experience
                </div>
              </div>
              {/* <div className="bg-gray-100 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-clr mb-2">12</div>
                <div className="text-slate-700 font-medium">
                  Expert Attorneys
                </div>
              </div> */}
            </div>
          </div>

          {/* <div className="relative">
            <img
              src={assets.placeholder}
              alt="Law firm office"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -top-6 -right-6 bg-primary-clr text-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <Award className="h-8 w-8 mx-auto mb-2" />
                <div className="font-bold">AV Rated</div>
                <div className="text-sm opacity-90">Martindale-Hubbell</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
