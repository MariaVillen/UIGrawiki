import AboutCardProfile from "./AboutCardProfile";
import type { Meta, StoryObj } from "@storybook/react";
import userExample from "@ui/assets/userExample.svg";

const meta = {
  title: "Components/About/AboutCardProfile",
  component: AboutCardProfile,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "light" },
  },
  argTypes: {},
} satisfies Meta<typeof AboutCardProfile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: "John Doe",
    userImage: userExample,
    onClick: (e) => {
      console.log(e);
    },
  },
};
