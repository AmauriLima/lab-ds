import React from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: React.ReactNode;
}

const TextInputRoot: React.FC<TextInputRootProps> = (props) => {
  const { children } = props;

  return (
    <div className="flex items-center gap-3 h-12 py-3 px-4 rounded bg-gray-800  w-full  focus-within:ring-2 ring-cyan-300 ">
      {children}
    </div>
  );
};

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: React.ReactNode;
}

const TextInputIcon: React.FC<TextInputIconProps> = (props) => {
  const { children } = props;

  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput: React.FC<TextInputInputProps> = (props) => {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
};

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
