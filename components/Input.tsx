import React from "react";
import { Metadata } from "next";

interface InputProps {
  value: string | undefined | null;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Input = (props: InputProps) => {
  return (
    <input
      className={`w-full text-white text-sm bg-[#1a3a5a] py-2 px-6 rounded-lg outline-none border border-[#F06250]/30 focus:border-[#F06250] focus:ring-2 focus:ring-[#F06250]/20 transition-all duration-200 placeholder-gray-400 ${props.className}`}
      placeholder={props.placeholder}
      type="text"
      value={props.value || ""}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export const metadata: Metadata = {
  title: {
    default: "WeThink Things - Interactive Solutions",
    template: `%s - WeThink Things`,
  },
  icons: {
    icon: "/favicon.png", // <-- update this line
  },
};
