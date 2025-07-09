import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import PracticeArea from "./PracticeArea";
import About from "./About";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <PracticeArea />
        <About />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
