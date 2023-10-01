import Banner from "./Banner";
import type { Meta, StoryObj } from "@storybook/react";
import Logo from "../../general/Logo/Logo";

const meta = {
  title: "Layouts/Banner",
  component: Banner,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {
    children: (
      <>
        <Logo type="base" />
        <div>
          <p>Welcome to grawiki</p>
          <Banner.Title>En Grawiki cada voz cuenta</Banner.Title>
        </div>
      </>
    ),
  },
};
