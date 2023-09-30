import type { Meta, StoryObj } from "@storybook/react";
import RedAccordion from "./Accordion";

const meta = {
  title: "Layouts/RedAccordion",
  component: RedAccordion,
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
} satisfies Meta<typeof RedAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <RedAccordion.Context>Hola soy el menu</RedAccordion.Context>,
    bar: <RedAccordion.Bar>Crear Artículo</RedAccordion.Bar>,
  },
};
