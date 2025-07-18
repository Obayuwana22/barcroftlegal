import { Award, ChevronRight } from "lucide-react";
import React from "react";
import { sliderAssets } from "../../data";
import { HeroSlider } from "./HeroSlider";

const Hero = () => {
  return (
    <section id="home" className="relative mt-10">
      <HeroSlider images={sliderAssets} />
      <div className="container mx-auto px-4">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white z-20">
          {/* <div className="grid lg:grid-cols-2 gap-12 items-center"> */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="px-3 rounded-full bg-white/20 text-white border-white/30  border max-w-fit hover:bg-transparent">
                20+ years of Excellence
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-text-white">
                Your Trusted Legal
                <span className=""> Advocates</span>
              </h1>

              <p className="text-xl text-white leading-relaxed">
                Expert Legal Solutions. Industry Insight. Trusted Results.
              </p>
              {/* <p className="text-base text-white leading-relaxed">
                Expert Legal Solutions. Industry Insight. Trusted Results. At{" "}
                <span className="font-bold">Barcroftlegal</span>, we deliver
                comprehensive legal services tailored to the complexities of
                Nigeria’s economic landscape. Whether you're navigating
                regulatory frameworks, closing high-stakes transactions, or
                resolving critical disputes, our team of seasoned legal
                professionals is equipped to guide you from start to finish. We
                operate at the intersection of law, business, and policy—across
                energy, maritime, and the public sector.
              </p> */}
            </div>

            <div className="flex flex-col justify-center sm:flex-row gap-4 ">
              <a href="#contact" className="">
                <button className="flex items-center justify-center py-3 rounded-md bg-bg-white  w-full transition duration-300 text-text-dark font-semibold cursor-pointer md:px-10">
                  Schedule Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </a>
              <a href="#about">
                <button className="border border-white py-3 text-white rounded-md  hover:bg-white w-full hover:text-text-dark transition duration-300 bg-transparent font-semibold cursor-pointer md:px-10">
                  Learn More
                </button>
              </a>
            </div>

            {/* <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-text-white">500+</div>
                <div className="text-sm text-white">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-text-white">35+</div>
                <div className="text-sm text-white">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-text-white">98%</div>
                <div className="text-sm text-white">Success Rate</div>
              </div>
            </div> */}
          </div>

          {/* <div className="relative">
            <img
              src={assets.hero}
              alt="Professional legal team"
              width={500}
              height={600}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-clr p-2 rounded-full">
                  <Award className="h-6 w-6 text-text-white" />
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
