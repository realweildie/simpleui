import type { Meta, StoryObj } from "@storybook/react";
import { ButtonBase } from "./ButtonBase";

const meta = {
  title: "ButtonBase",
  component: ButtonBase,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ButtonBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    children: "Click me",
    as: "a",
  },
};
