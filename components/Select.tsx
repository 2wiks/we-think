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
      <SelectPrimitive.Trigger className="w-full text-white text-lg bg-zinc-700 py-3 px-6 rounded-lg cursor-pointer flex items-center justify-between h-fit disabled:opacity-50 min-h-[48px]">
        <div className={`${props.value ? "text-white" : "text-zinc-400"} text-lg`}>
          {props.value ? props.value : props.placeholder}
        </div>
        <ChevronDownIcon className="w-5 h-5" />
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className="z-50 w-[var(--radix-select-trigger-width)] max-h-[350px] overflow-y-auto"
          position="popper"
          sideOffset={6}
        >
          <SelectPrimitive.Viewport className="rounded-lg border-2 border-[#f0ad4e] bg-white shadow-xl py-1">
            {props.options.map((option) => {
              const isSelected = props.isSelected(option);

              return (
                <div
                  key={props.renderOption(option)?.toString()}
                  className={`py-3 px-6 cursor-pointer hover:bg-[#f0ad4e]/20 outline-none text-base rounded-md transition-colors duration-150 ${
                    isSelected ? "text-[#222] bg-[#f0ad4e]/40 font-semibold" : "text-[#666]"
                  }`}
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
