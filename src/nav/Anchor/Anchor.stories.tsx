import Anchor from "./Anchor";
import type { Meta, StoryObj } from "@storybook/react";
import { NewWindow } from "@ui/icons";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "nav/Anchor",
  component: Anchor,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [withRouter],
  argTypes: {
    theme: {
      control: "radio",
      options: ["dark", "light"],
    },
    size: {
      control: "radio",
      options: ["small", "normal", "big"],
    },
    disabled: {
      control: "boolean",
    },
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    theme: "light",
    size: "normal",
    children: "Read more",
    disabled: false,
    to: "/",
  },
};

export const Disabled: Story = {
  args: {
    theme: "light",
    size: "normal",
    children: "Read more",
    to: "/",
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    theme: "light",
    size: "normal",
    children: (
      <>
        <NewWindow className="gwk-pr-1 gwk-h-full" />
        <span>Read more</span>
      </>
    ),
    to: "/",
    disabled: true,
  },
};

export const WithIconReverse: Story = {
  args: {
    theme: "light",
    size: "normal",
    children: (
      <>
        <span>Read more</span>
        <NewWindow className="gwk-pl-1" />
      </>
    ),
    to: "/",
    disabled: true,
  },
};
