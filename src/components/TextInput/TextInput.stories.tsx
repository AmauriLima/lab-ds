import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInputRootProps } from "./components/TextInputRoot";
import { TextInput } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type yout e-mail address" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disabled: true,
      },
      children: {
        table: {
          disabled: true,
        },
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type yout e-mail address" />,
  },
};
