import type { Meta, StoryObj } from "@storybook/react";
import { ButtonBase } from "./ButtonBase";
import { FaAmazon } from "react-icons/fa";

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
  argTypes: {
    "data-size": {
      control: {
        type: "radio",
      },
      options: ["small", "medium", "large"],
    },
    as: {
      control: {
        type: "select",
      },
      options: ["a", "button"],
    },
  },
  args: {
    children: "Primary",
    leadingIcon: FaAmazon,
    as: "button",
    "data-size": "medium",
  },
};
