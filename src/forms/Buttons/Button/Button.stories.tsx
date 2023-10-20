import { Button } from "@ui/forms";
import type { Meta, StoryObj } from "@storybook/react";
import { PencilFill } from "@ui/icons";

const meta = {
  title: "Buttons/Button",
  tags: ["autodocs"],
  component: Button,
  parameters: {
    layout: "padded",
    componentSubtitle:
      "The `Button` component is a versatile React button component that can be customized with various variants and sizes.",
  },
  argTypes: {
    variant: {
      description: "The colors of the buttons",
      control: "radio",
      options: ["default", "primary", "secondary", "ghost"],
    },
    size: {
      description: "The differnt sizes",
      control: "radio",
      options: ["small", "normal", "medium", "big"],
    },
    btnType: {
      description:
        "Choose 'icon' if the content of the button is just a single icon. If is an icon and a button choose 'button'.",
      control: "radio",
      options: ["button", "icon"],
    },
    fluid: {
      description: "The button became full width",
      control: "boolean",
    },
    onClick: {
      control: false,
    },
    children: {
      control: "",
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
