import React from "react";

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={`bg-[#f0ad4e] hover:bg-[#e09b3d] text-white font-semibold text-base px-8 py-3 rounded-lg disabled:opacity-50 h-fit transition-all duration-200 transform hover:scale-105 hover:shadow-lg ${className}`}
      onClick={props.disabled ? undefined : onClick}
      {...props}
    >
      {children}
    </button>
  );
};
