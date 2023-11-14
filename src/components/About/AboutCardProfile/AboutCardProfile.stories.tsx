import AboutCardProfile from "./AboutCardProfile";
import type { Meta, StoryObj } from "@storybook/react";
import userExample from "@ui/assets/userExample.svg";

const meta = {
  title: "Components/About/AboutCardProfile",
  component: AboutCardProfile,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The AboutCardProfile component is a user profile card designed for displaying user information. It includes the user's name and profile image, making it an ideal choice for user profiles in various web applications. It also features a customizable click event for interaction.",
      },
    },
  },
  argTypes: {
    userName: {
      description: "The name of the user.", // Description: Description for userName prop
      control: "text", // Control: Text input
    },
    userImage: {
      description: "The URL of the user's profile image.", // Description: Description for userImage prop
      control: "text", // Control: Text input
    },
    onClick: {
      description: "Edit the Profile Card Clicking in Edit icon", // Description: Description for onClick prop
      action: "clicked", // Control: No input control
      control: false,
    },
  },
} satisfies Meta<typeof AboutCardProfile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: "John Doe",
    userImage: userExample,
  },
};
