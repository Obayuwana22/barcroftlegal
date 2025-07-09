import { Scale } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <Scale className="h-5 w-5 text-primary-clr" />
      <div>
        <h1 className="text-xl font-bold">Barcroftlegal</h1>
        <p className="text-xs text-slate-300">Attorneys at Law</p>
      </div>
    </div>
  );
};

export default Logo;
