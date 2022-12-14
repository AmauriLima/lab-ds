import React, { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, asChild, ...rest } = props;

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "px-4 py-3 bg-cyan-500 rounded font-sans text-black font-semibold w-full transition-colors text-sm hover:bg-cyan-300 focus:ring-2 ring-white"
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
};
