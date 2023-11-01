import { withRouter } from "storybook-addon-react-router-v6";
import LogoCard from "./LogoCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layouts/LogoCard",
  component: LogoCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withRouter],
  argTypes: {},
} satisfies Meta<typeof LogoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate sit ducimus atque exercitationem non nihil accusantium officiis nesciunt iure at soluta repudiandae molestiae quae, consectetur debitis, laborum deserunt ea tempore.Voluptatem doloremque eveniet velit aspernatur? Labore, molestias quis. Voluptatum consequatur perspiciatis voluptatem cum enim quod officia blanditiis libero. Ducimus delectus quis repudiandae eos ab, labore assumenda rem cupiditate neque repellendus!",
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
    layout: "fullscreen",
  },
  args: { ...Default.args },
};
