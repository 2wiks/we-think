import React from "react";

import { useVoiceChat } from "../logic/useVoiceChat";
import { Button } from "../Button";
import { LoadingIcon, MicIcon, MicOffIcon } from "../Icons";
import { useConversationState } from "../logic/useConversationState";
import { useInterrupt } from "../logic/useInterrupt";

export const AudioInput: React.FC = () => {
  const { muteInputAudio, unmuteInputAudio, isMuted, isVoiceChatLoading } =
    useVoiceChat();
  const { isUserTalking } = useConversationState();
  const { interrupt } = useInterrupt();

  const handleMuteClick = () => {
    if (isMuted) {
      unmuteInputAudio();
    } else {
      muteInputAudio();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        className={`!p-2 relative`}
        disabled={isVoiceChatLoading}
        onClick={handleMuteClick}
      >
        <div
          className={`absolute left-0 top-0 rounded-lg border-2 border-[#F06250] w-full h-full ${isUserTalking ? "animate-ping" : ""}`}
        />
        {isVoiceChatLoading ? (
          <LoadingIcon className="animate-spin" size={20} />
        ) : isMuted ? (
          <MicOffIcon size={20} />
        ) : (
          <MicIcon size={20} />
        )}
      </Button>
      
      <Button 
        className="!p-2" 
        onClick={interrupt}
      >
        Interrupt
      </Button>
    </div>
  );
};
