import { Scale } from "lucide-react";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-clr via-dark-blue to-primary-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-slate-300">
              Providing exceptional legal representation with integrity and
              dedication
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Corporate & Commercial Advisory
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Deal Structuring & Transaction Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Dispute Resolution
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Energy
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Our Attorneys
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Case Results
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div> */}

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-slate-300">
              <p>+234 810 978 8217</p>
              <p>info@barcroftlegal.com</p>
              <p>
                3b Pacific Drive, Ocean Bay Estate,
                <br />
                Lekki Lagos
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
          <p>
            &copy; 2025 Barcroftlegal. All rights reserved. | Privacy Policy |
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
