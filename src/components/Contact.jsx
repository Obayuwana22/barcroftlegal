import React, { useState } from "react";
import Badge from "./Badge";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import FormInput from "./FormInput";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    legalMatter: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <div className="px-3 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 max-w-fit hover:bg-transparent mb-3">
                Get In Touch
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Schedule Your Consultation
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Whether you're a multinational investor, a government
                institution, or a growing enterprise, Barcroftlegal is your
                legal partner for clarity, confidence, and success.
              </p>

              <p className="text-xl text-slate-300 leading-relaxed">
                Contact us today to schedule a consultation or learn more about
                how we can support your goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-amber-500/20 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-slate-300">(555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-amber-500/20 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-slate-300">info@sterlinglaw.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-amber-500/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-slate-300">
                    123 Legal Plaza, Suite 500
                    <br />
                    Downtown, ST 12345
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-amber-500/20 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="text-slate-300">
                    Mon-Fri: 8:00 AM - 6:00 PM
                    <br />
                    Sat: 9:00 AM - 2:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleOnSubmit}>
            <div className="bg-white p-5">
              <div className="mb-8">
                <div className="text-slate-900 font-bold text-2xl mb-2">
                  Send Us a Message
                </div>
                <div className="text-slate-500 text-sm">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* First Name */}
                  <FormInput
                    label="First Name"
                    name="first name"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {/* Last Name */}
                  <FormInput
                    label="Last Name"
                    name="last name"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                {/* Email */}
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {/* Phone */}
                <FormInput
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {/* Legal Matter */}
                <FormInput
                  label="Legal Matter"
                  name="legal matter"
                  type="text"
                  placeholder="Brief description of your legal needs"
                  value={formData.legalMatter}
                  onChange={handleChange}
                />
                {/* Message*/}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    placeholder="Please provide details about your case..."
                    className="text-gray-300 px-4 py-2 text-sm border border-gray-300 rounded-md w-full placeholder:text-gray-500 focus:border-2 focus:border-black focus:outline-offset-5 focus:outline-gray-400 focus:rounded-md"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-md py-2 cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
