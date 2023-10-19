import Notification from "./Notification";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Notification",
  component: Notification,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Nuevos cambios a su tema",
    children:
      'El tema que has creado "Moneda de circulación" fue editado por un usuario.',
  },
};
