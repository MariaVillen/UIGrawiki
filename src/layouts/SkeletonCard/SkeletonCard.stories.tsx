import SkeletonCard from "./SkeletonCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layouts/SkeletonCard",
  component: SkeletonCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof SkeletonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

//TODO: Averiguar como poner jsx dentro de children DEFAULT CATEGORY

export const Example: Story = {
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  args: {
    className: "gwk-px-0",
    children: (
      <div className="gwk-gap-3 gwk-flex gwk-flex-col">
        <div className="gwk-gap-1 gwk-flex gwk-flex-col">
          <div className="gwk-gap-1 gwk-flex gwk-flex-col gwk-px-4">
            <SkeletonCard.Title />
            <SkeletonCard.Subtitle />
          </div>
          <SkeletonCard.Basic shape="sharp" height="118px" width="318px" />
        </div>
        <div className="gwk-flex gwk-gap-6 gwk-px-2 gwk-pl-4 gwk-py-2">
          <SkeletonCard.Circle size="md" />
          <SkeletonCard.Circle size="md" />
          <SkeletonCard.Circle size="md" />
        </div>
      </div>
    ),
  },
};
