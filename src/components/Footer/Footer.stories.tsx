import { withRouter } from "storybook-addon-react-router-v6";
import Footer from "./Footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark" },
  },
  decorators: [withRouter],
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const DefaultMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
  args: {},
};
