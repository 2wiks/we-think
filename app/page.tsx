"use client";

import InteractiveAvatar from "@/components/InteractiveAvatar";
export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#002856]">
      <div className="w-[1100px] flex flex-col items-center justify-start gap-6 mx-auto pt-6 pb-16 px-6">
        <div className="w-full max-w-4xl">
          <InteractiveAvatar />
        </div>
      </div>
    </div>
  );
}
