import React from "react";

const Badge = ({ text, className }) => {
  return (
    <div
      className={`bg-primary-text-light text-primary-text-blue mb-4 max-w-fit px-2 py-1 rounded-full font-semibold ${className} `}
    >
      {text}
    </div>
  );
};

export default Badge;
