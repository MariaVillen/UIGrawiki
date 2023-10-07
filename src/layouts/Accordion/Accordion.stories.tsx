import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

const meta = {
  title: "Layouts/Accordion",
  component: Accordion,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    rounded: {
      control: "boolean",
    },
    bar: {
      control: "text",
    },
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Accordion.Context>Hola soy el menu</Accordion.Context>,
    rounded: true,
    bar: <Accordion.Bar>Crear Artículo</Accordion.Bar>,
    className:
      "gwk-m-[3.125rem] gwk-w-full gwk-text-text-triarty-white gwk-bg-sufrace-primary-hover gwk-p-[0.8125rem] gwk-text-lg",
  },
};
