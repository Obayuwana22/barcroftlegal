import React, { useState } from "react";
import Badge from "./Badge";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import FormInput from "./FormInput";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    legalMatter: "",
    message: "",
  });

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    setLoading(true)
    e.preventDefault();

    const serviceID = "service_ga1uey3";
    const templateID = "template_u4f8erq";
    const publicKey = "WTXitCVbdjxfbWhT0";

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      legal_matter: formData.legalMatter,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setLoading(false)
        toast.success("Message sent successfully!");
      
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          legalMatter: "",
          message: "",
        });
      })
      .catch((err) => {
        setLoading(false)
        toast.error("Something went wrong. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-primary-clr text-white">
      <ToastContainer />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <div className="px-3 rounded-full bg-blue-400 text-text-white border border-primary-text-light max-w-fit hover:bg-transparent mb-3">
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
                <div className="bg-white/20 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-slate-300">(555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-slate-300">info@sterlinglaw.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
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
                <div className="bg-white/20 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
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
            <div className="bg-white p-5 rounded-lg">
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
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {/* Last Name */}
                  <FormInput
                    label="Last Name"
                    name="lastName"
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
                  name="legalMatter"
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
                    className="text-gray-600 px-4 py-2 text-sm border border-gray-300 rounded-md w-full placeholder:text-gray-400 focus:border-2 focus:border-black focus:outline-offset-5 focus:outline-gray-400 focus:rounded-md"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-clr hover:bg-primary-dull text-white font-semibold rounded-md py-2 cursor-pointer"
                
                >
                  {loading ? "Sending message....." : "Send Message" }
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
