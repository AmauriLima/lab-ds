import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { Text } from "../Text/Text";

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { label, ...rest } = props;

  return (
    <div className="flex gap-2 items-center">
      <CheckboxPrimitive.Root
        {...rest}
        className="w-6 h-6 rounded p-[2px] bg-gray-800"
      >
        <CheckboxPrimitive.Indicator asChild>
          <Check weight="bold" className="h-5 w-5 text-cyan-500" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && (
        <Text size="sm" className="text-gray-200">
          {label}
        </Text>
      )}
    </div>
  );
};
