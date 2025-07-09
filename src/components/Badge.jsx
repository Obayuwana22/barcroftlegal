import React from "react";

const Badge = ({ text, className }) => {
  return (
    <div
      className={`bg-amber-100 text-amber-800 mb-4 max-w-fit px-2 py-1 rounded-full font-semibold ${className} `}
    >
      {text}
    </div>
  );
};

export default Badge;
