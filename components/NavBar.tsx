"use client";

import Link from "next/link";

import { GithubIcon } from "./Icons";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-row justify-center items-center w-full m-auto p-6">
        <div className="flex flex-row items-center justify-center gap-12">
          {/* WeThink Logo */}
          <div className="flex flex-col items-center">
            {/* Logo Text */}
            <div className="flex items-baseline relative">
              {/* Logo Dots positioned above the W */}
              <div className="absolute -top-4 left-0 flex gap-2">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              </div>
              <span className="text-5xl font-bold text-[#F06250]">We</span>
              <span className="text-5xl font-bold text-[#6A0DAD] relative">
                Think
              </span>
            </div>
          </div>

          {/* JAMES IMMIGRATION LAW Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.jpg" 
              alt="JAMES IMMIGRATION LAW" 
              className="h-24 w-auto object-contain drop-shadow-lg"
            />
          </div>

        </div>
      </div>
    </>
  );
}
