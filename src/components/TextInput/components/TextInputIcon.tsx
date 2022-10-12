import { Slot } from "@radix-ui/react-slot";
import React from "react";

export interface TextInputIconProps {
  children: React.ReactNode;
}

export const TextInputIcon: React.FC<TextInputIconProps> = (props) => {
  const { children } = props;

  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

