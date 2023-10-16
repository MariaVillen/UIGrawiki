import StepperBar from "./StepperBar";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "nav/StepperBar",
  component: StepperBar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [withRouter],
  argTypes: {
    pages: {
      control: "number",
    },
    initPage: {
      control: "number",
    },
    pagesToShow: {
      controle: "number",
    },
    currentPage: {
      control: "number",
    },

    format: {
      control: "radio",
      options: ["circle", "number"],
    },
    onChange: {
      control: false,
    },
  },
} satisfies Meta<typeof StepperBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Circle: Story = {
  args: {
    pages: 10,
    pagesToShow: 5,
    initPage: 1,
    currentPage: 1,
    format: "circle",
  },
};

export const Numbers: Story = {
  args: {
    pages: 10,
    pagesToShow: 5,
    initPage: 1,
    currentPage: 1,
    format: "number",
  },
};
