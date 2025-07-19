import React, { useEffect, useRef } from "react";

import { useMessageHistory, MessageSender } from "../logic";

export const MessageHistory: React.FC = () => {
  const { messages } = useMessageHistory();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || messages.length === 0) return;

    container.scrollTop = container.scrollHeight;
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="w-[600px] overflow-y-auto flex flex-col gap-2 px-4 py-3 text-white self-center max-h-[150px] bg-[#1a3a5a]/50 rounded-lg border border-[#F06250]/20"
    >
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex flex-col gap-1 max-w-[350px] ${
            message.sender === MessageSender.CLIENT
              ? "self-end items-end"
              : "self-start items-start"
          }`}
        >
          <p className="text-xs text-[#F06250] font-medium">
            {message.sender === MessageSender.AVATAR ? "Avatar" : "You"}
          </p>
          <p className="text-sm text-gray-200">{message.content}</p>
        </div>
      ))}
    </div>
  );
};
