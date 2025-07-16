import React from "react";

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={`bg-gradient-to-r from-[#FF7A29] via-[#F06250] to-[#6A0DAD] text-white font-bold text-base px-8 py-3 rounded-lg shadow-lg border-2 border-[#fff3] focus:outline-none focus:ring-2 focus:ring-[#FF7A29]/80 hover:from-[#FF9A29] hover:to-[#8A2BE2] hover:shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-100 ${className}`}
      style={{
        textShadow: '0 2px 8px #0008',
        boxShadow: '0 0 0 2px #F06250, 0 4px 24px 0 #6A0DAD55',
      }}
      onClick={props.disabled ? undefined : onClick}
      {...props}
    >
      {children}
    </button>
  );
};
