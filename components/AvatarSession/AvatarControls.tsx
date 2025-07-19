import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import React from "react";

import { useVoiceChat } from "../logic/useVoiceChat";
import { Button } from "../Button";
import { useInterrupt } from "../logic/useInterrupt";

import { AudioInput } from "./AudioInput";
import { TextInput } from "./TextInput";

export const AvatarControls: React.FC = () => {
  const {
    isVoiceChatLoading,
    isVoiceChatActive,
    startVoiceChat,
    stopVoiceChat,
  } = useVoiceChat();
  const { interrupt } = useInterrupt();

  return (
    <div className="flex flex-col gap-3 relative w-full items-center">
      <ToggleGroup
        className={`bg-gradient-to-r from-[#FF7A29]/20 via-[#F06250]/20 to-[#6A0DAD]/20 rounded-lg p-1 border border-[#F06250]/30 ${isVoiceChatLoading ? "opacity-50" : ""}`}
        disabled={isVoiceChatLoading}
        type="single"
        value={isVoiceChatActive || isVoiceChatLoading ? "voice" : "text"}
        onValueChange={(value) => {
          if (value === "voice" && !isVoiceChatActive && !isVoiceChatLoading) {
            startVoiceChat();
          } else if (
            value === "text" &&
            isVoiceChatActive &&
            !isVoiceChatLoading
          ) {
            stopVoiceChat();
          }
        }}
      >
        <ToggleGroupItem
          className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-[#FF7A29] data-[state=on]:via-[#F06250] data-[state=on]:to-[#6A0DAD] data-[state=on]:text-white rounded-lg p-2 text-sm w-[90px] text-center text-gray-300 hover:text-white transition-all duration-200"
          value="voice"
        >
          Voice Chat
        </ToggleGroupItem>
        <ToggleGroupItem
          className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-[#FF7A29] data-[state=on]:via-[#F06250] data-[state=on]:to-[#6A0DAD] data-[state=on]:text-white rounded-lg p-2 text-sm w-[90px] text-center text-gray-300 hover:text-white transition-all duration-200"
          value="text"
        >
          Text Chat
        </ToggleGroupItem>
      </ToggleGroup>
      {isVoiceChatActive || isVoiceChatLoading ? <AudioInput /> : <TextInput />}
      <div className="absolute top-[-70px] right-3">
        <Button className="!bg-gradient-to-r !from-red-600 !via-red-500 !to-red-700 !text-white !border-red-400/50" onClick={interrupt}>
          Interrupt
        </Button>
      </div>
    </div>
  );
};
