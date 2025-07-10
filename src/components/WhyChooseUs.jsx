import {
  Award,
  Building,
  ChevronRight,
  Scale,
  Shield,
  Users,
} from "lucide-react";
import React from "react";
import Badge from "./Badge";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="px-3 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 max-w-fit hover:bg-transparent mb-5 mx-auto">
            Why Choose Us?
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Your Trusted Legal Partners
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We combine deep legal expertise with strategic thinking to deliver
            exceptional results for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group">
            <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-all duration-300 h-full">
              <div className="bg-amber-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
                <Award className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Industry-Specific Legal Expertise
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Our specialized knowledge across various industries ensures
                tailored legal solutions that address your unique business
                challenges and opportunities.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-all duration-300 h-full">
              <div className="bg-amber-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
                <Shield className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Proven Track Record
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Demonstrated success in complex transactions and disputes, with
                a history of achieving favorable outcomes for our clients across
                diverse legal matters.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-all duration-300 h-full">
              <div className="bg-amber-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
                <Scale className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Deep Regulatory Understanding
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Comprehensive knowledge of Nigeria's legal and regulatory
                frameworks, ensuring compliance and strategic advantage in all
                your legal matters.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-all duration-300 h-full">
              <div className="bg-amber-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
                <Users className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Strategic, Client-Focused Approach
              </h3>
              <p className="text-slate-300 leading-relaxed">
                We prioritize understanding your business objectives and develop
                legal strategies that align with your goals and drive measurable
                results.
              </p>
            </div>
          </div>

          <div className="group md:col-span-2 lg:col-span-2">
            <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-all duration-300 h-full">
              <div className="bg-amber-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
                <Building className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Nationwide & International Reach
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Extensive network of trusted legal partners across Nigeria and
                internationally, enabling us to provide seamless legal support
                wherever your business operates or expands.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Experience the Barcroft Difference?
            </h3>
            <p className="text-slate-800 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust us with their most
              important legal matters.
            </p>
            <a href="#contact">
              <button className="flex items-center justify-center mx-auto px-10 py-3 rounded bg-slate-900 hover:bg-slate-800 text-white font-semibold cursor-pointer">
                Schedule Your Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
