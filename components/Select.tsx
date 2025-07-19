import * as SelectPrimitive from "@radix-ui/react-select";
import { useState } from "react";

import { ChevronDownIcon } from "./Icons";

interface SelectProps<T> {
  options: T[];
  renderOption: (option: T) => React.ReactNode;
  onSelect: (option: T) => void;
  isSelected: (option: T) => boolean;
  value: string | null | undefined;
  placeholder?: string;
  disabled?: boolean;
}

export function Select<T>(props: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectPrimitive.Root
      disabled={props.disabled}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SelectPrimitive.Trigger
        className="w-full text-white text-base bg-[#1a3a5a] px-4 py-2 rounded-lg cursor-pointer flex items-center justify-between min-h-[40px] max-h-[44px] h-[42px] disabled:opacity-50 border border-[#F06250]/30 hover:border-[#F06250]/50 focus:border-[#F06250] focus:ring-2 focus:ring-[#F06250]/20 transition-all duration-200"
      >
        <div className={`${props.value ? "text-white" : "text-zinc-400"} text-base`}
          style={{ fontSize: 16 }}
        >
          {props.value ? props.value : props.placeholder}
        </div>
        <ChevronDownIcon className="w-4 h-4 ml-2 transition-transform duration-200" />
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className="z-50 w-[var(--radix-select-trigger-width)] max-h-[300px] overflow-y-auto"
          position="popper"
          sideOffset={6}
        >
          <SelectPrimitive.Viewport className="rounded-lg border border-[#F06250]/50 bg-[#1a3a5a] shadow-xl py-1">
            {props.options.map((option) => {
              const isSelected = props.isSelected(option);

              return (
                <div
                  key={props.renderOption(option)?.toString()}
                  className={`px-4 py-2 cursor-pointer hover:bg-[#F06250]/20 outline-none text-base rounded-md transition-colors duration-150 ${
                    isSelected ? "text-white bg-[#F06250]/40 font-semibold" : "text-gray-300"
                  }`}
                  style={{ height: 40, fontSize: 16 }}
                  onClick={() => {
                    props.onSelect(option);
                    setIsOpen(false);
                  }}
                >
                  {props.renderOption(option)}
                </div>
              );
            })}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
