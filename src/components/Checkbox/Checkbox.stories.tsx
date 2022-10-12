import { Meta, StoryObj } from "@storybook/react";

import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};

export const WithLabel: StoryObj<CheckboxProps> = {
  args: {
    label: "Checkbox label",
  },
};
