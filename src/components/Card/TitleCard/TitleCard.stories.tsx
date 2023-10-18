import StateIcon from "@ui/general/StateIcon/StateIcon";
import TitleCard from "./TitleCard";
import type { Meta, StoryObj } from "@storybook/react";
import { PencilFill } from "@ui/icons";

const meta = {
  title: "Components/TitleCard",
  component: TitleCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof TitleCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Moneda de circulación",
    subtitle: "Banco",
  },
};

export const WithStates: Story = {
  args: {
    ...Default.args,
    children: <StateIcon icon={PencilFill} state="secondary" round />,
  },
};
