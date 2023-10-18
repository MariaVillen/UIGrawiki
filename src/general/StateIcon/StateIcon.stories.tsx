import { PencilFill } from "@ui/icons";
import StateIcon from "./StateIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "General/StateIcon",
  component: StateIcon,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    state: {
      control: "radio",
      options: ["primary", "secondary", "default", "ghost", "warning"],
    },
  },
} satisfies Meta<typeof StateIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "primary",
    icon: PencilFill,
  },
};
