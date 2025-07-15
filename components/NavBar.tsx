"use client";

import Link from "next/link";

import { GithubIcon } from "./Icons";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-row justify-center items-center w-[1000px] m-auto p-8">
        <div className="flex flex-row items-center gap-4">
          {/* WeThink Logo */}
          <div className="flex flex-col items-start">
            {/* Logo Dots */}
            <div className="flex gap-1 mb-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            </div>
            {/* Logo Text */}
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-[#F06250]">We</span>
              <span className="text-3xl font-bold text-[#6A0DAD] relative">
                Think
                <span className="text-xl ml-1 relative -top-3">💡</span>
              </span>
            </div>
          </div>
          {/* Brand Text */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-800">WeThink</span>
            <span className="text-base font-medium text-[#f0ad4e] uppercase tracking-wide">Things</span>
          </div>
        </div>
      </div>
    </>
  );
}
