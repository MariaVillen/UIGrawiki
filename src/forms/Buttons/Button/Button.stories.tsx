import { Button } from "@ui/forms";
import type { Meta, StoryObj } from "@storybook/react";
import { PencilFill } from "@ui/icons";

const meta = {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    componentSubtitle:
      "The `Button` component is a versatile React button component that can be customized with various variants and sizes.",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "primary", "secondary", "ghost"],
    },
    size: {
      control: "radio",
      options: ["small", "normal", "medium", "big"],
    },
    fluid: {
      control: "boolean",
    },
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    variant: "default",
    size: "normal",
    children: "Botón",
    btnType: "button",
    fluid: false,
  },
};

export const IcoOnly: Story = {
  args: {
    variant: "primary",
    size: "small",
    btnType: "icon",
    children: (
      <Button.Icon
        icon={PencilFill}
        size={Default?.args?.size}
        className="gwk-p-1"
      />
    ),
  },
};

export const ButtonWithIcon: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <Button.Icon icon={PencilFill} size={Default?.args?.size} /> Button
      </>
    ),
  },
};

export const ButtonWithIconReverse: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        Button <Button.Icon icon={PencilFill} size={Default?.args?.size} />
      </>
    ),
  },
};
