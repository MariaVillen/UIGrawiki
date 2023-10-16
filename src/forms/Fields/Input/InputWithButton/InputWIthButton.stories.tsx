import InputWithButton from "./InputWithButton";
import type { Meta, StoryObj } from "@storybook/react";
import {
  PasswordShowOutline,
  Find,
  ToggleButton,
  PasswordHideOutline,
} from "../../../..";

const meta = {
  title: "Fields/InputWithButton",
  component: InputWithButton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "light" },
  },
  argTypes: {
    placeholder: {
      control: "text",
    },
    colorStates: {
      control: "boolean",
    },
    onClick: {},
  },
} satisfies Meta<typeof InputWithButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {
    placeholder: "Categoría",
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    children: <Find className="gwk-h-8 gwk-w-8" />,
  },
};

export const WithIconReverse: Story = {
  args: {
    reverse: true,
    placeholder: "Contraseña",
    children: <PasswordShowOutline className="gwk-h-8 gwk-w-8" />,
  },
};

export const WithToggleButtonReverse: Story = {
  args: {
    reverse: true,
    placeholder: "Contraseña",
    type: "password",
    children: (
      <ToggleButton
        iconTrue={<PasswordShowOutline className="gwk-h-8 gwk-w-8" />}
        iconFalse={<PasswordHideOutline className="gwk-h-8 gwk-w-8" />}
        isActive={false}
      />
    ),
  },
};
