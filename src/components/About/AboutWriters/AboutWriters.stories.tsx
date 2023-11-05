import AboutWriters from "./AboutWriters";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/About/AboutWriters",
  component: AboutWriters,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component:
          "The `AboutWriters` component is designed to display information about the writers contributing to a publication. It offers a flexible way to present the number of writers involved in the project. Additionally, it allows for the inclusion of optional child elements to display supplementary information. Whether you're showcasing a team of authors, contributors, or creators, the `AboutWriters` component simplifies the presentation of writer-related details.",
      },
    },
  },
  argTypes: {
    writers: {
      description: "The number of writers contributing to the publication.",
      control: "number",
    },
    children: {
      description: "Optional child elements to display additional information.",
      control: "text",
    },
  },
} satisfies Meta<typeof AboutWriters>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    writers: 25,
  },
};

export const WithLastVersion: Story = {
  args: {
    ...Default.args,
    children: (
      <span className="gwk-text-text-disable">Ultima versión 04/10/2023</span>
    ),
  },
};
