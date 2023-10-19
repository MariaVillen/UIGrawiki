import TitleEditToggle from "./TitleEditToggle";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Titles/TitleEditToggle",
  component: TitleEditToggle,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof TitleEditToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
    label: "Crear Tema",
  },
};
export const Primary: Story = {
  args: {
    ...Default.args,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: "secondary",
  },
};

export const PrimaryRounded: Story = {
  args: {
    ...Primary.args,
    rounded: true,
  },
};
export const SecondaryRounded: Story = {
  args: {
    ...Secondary.args,
    rounded: true,
  },
};
