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
      className={`w-full text-white text-sm bg-zinc-700 py-2 px-6 rounded-lg outline-none ${props.className}`}
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
