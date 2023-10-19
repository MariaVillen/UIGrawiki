import TitleEdit from "./TitleEdit";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Titles/TitleEdit",
  component: TitleEdit,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof TitleEdit>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Nuevos cambios a tu tema",
    variant: "custom",
  },
};
export const DefaultRounded: Story = {
  args: {
    label: "Nuevos cambios a tu tema",
    variant: "custom",
    rounded: true,
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
