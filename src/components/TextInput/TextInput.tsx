import React from "react";

import { Envelope, IconProps } from "phosphor-react";

import { TextInputRoot } from "./components/TextInputRoot";
import { TextInputIcon } from "./components/TextInputIcon";
import { TextInputInput } from "./components/TextInputInput";

TextInputRoot.displayName = "TextInput.Root";
TextInputIcon.displayName = "TextInput.Icon";
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};

interface MountedTextInputProps {
  Icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export const MountedTextInput: React.FC<MountedTextInputProps> = (props) => {
  const { Icon } = props;

  return (
    <TextInput.Root>
      {Icon && (
        <TextInput.Icon>
          <Icon />
        </TextInput.Icon>
      )}
      <TextInput.Input placeholder="Type yout e-mail address" />,
    </TextInput.Root>
  );
};
