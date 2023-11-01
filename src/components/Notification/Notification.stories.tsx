import Notification from "./Notification";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Notification",
  component: Notification,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Custom: Story = {
  args: {
    variant: "custom",
    label: "Nuevos cambios a su tema",
    children:
      'El tema que has creado "Moneda de circulación" fue editado por un usuario.',
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    ...Custom.args,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    ...Custom.args,
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    ...Custom.args,
  },
};
