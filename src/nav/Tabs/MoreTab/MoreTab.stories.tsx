import MoreTab from "./MoreTab";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "nav/MoreTab",
  component: MoreTab,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "dark",
  },
  decorators: [withRouter],
  argTypes: {
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof MoreTab>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    to: "/",
  },
};
