import React from "react";
import Logo from "./Logo";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <header className="text-white fixed w-full top-0 z-50 bg-navbar-bg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <nav className="hidden md:flex items-center gap-5 font-semibold xl:gap-8">
            <a
              href="#home"
              className="hover:text-primary-clr transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-primary-clr transition-colors"
            >
              About
            </a>
            <a
              href="#practice-areas"
              className="hover:text-primary-clr transition-colors"
            >
              Practice Areas
            </a>
            <a
              href="#attorneys"
              className="hover:text-primary-clr transition-colors"
            >
              Attorneys
            </a>
            <a
              href="#contact"
              className="hover:text-primary-clr transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <button className="bg-primary-clr hover:bg-amber-600 text-text-dark font-semibold rounded-lg px-5 py-2">
              <a href="#contact" className="cursor-pointer">
                Free Consultation
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

{
  /* <header className="text-white sticky top-0 z-50 bg-navbar-bg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="hover:text-primary-clr transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-primary-clr transition-colors"
            >
              About
            </a>
            <a
              href="#practice-areas"
              className="hover:text-primary-clr transition-colors"
            >
              Practice Areas
            </a>
            <a
              href="#attorneys"
              className="hover:text-primary-clr transition-colors"
            >
              Attorneys
            </a>
            <a
              href="#contact"
              className="hover:text-primary-clr transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <button className="bg-primary-clr hover:bg-amber-600 text-text-dark font-semibold rounded-lg px-5 py-2">
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </header> */
}
