import React from "react";

export interface TextInputRootProps {
  children: React.ReactNode;
}

export const TextInputRoot: React.FC<TextInputRootProps> = (props) => {
  const { children } = props;

  return (
    <div className="flex items-center gap-3 h-12 py-3 px-4 rounded bg-gray-800  w-full  focus-within:ring-2 ring-cyan-300 ">
      {children}
    </div>
  );
};

TextInputRoot.displayName = "TextInput.Root";
