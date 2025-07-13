// AnimatedSection.jsx
import { motion, useInView } from "motion";
import React, { useRef, useEffect } from "react";

const ScrollFadeIn = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // When the section is in view, animate opacity and translateY
    return useInView(ref.current, ({ target }) => {
      motion.animate(target, { 
        opacity: [0, 1], 
        y: [50, 0] 
      }, { 
        duration: 0.8, 
        easing: "ease-out" 
      });
    });
  }, []);

  return (
    <motion.div
      ref={ref}
      className="min-h-[60vh] bg-gray-100 rounded-xl shadow-md p-10 flex items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-gray-800">Scroll to Animate Me ✨</h2>
    </motion.div>
  );
};

export default ScrollFadeIn;
