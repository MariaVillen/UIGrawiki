import SkeletonCard from "./SkeletonCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layouts/SkeletonCard",
  component: SkeletonCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgounds: { default: "dark" },
  },
} satisfies Meta<typeof SkeletonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

//TODO: Averiguar como poner jsx dentro de children DEFAULT CATEGORY

export const Example: Story = { args: {} };
