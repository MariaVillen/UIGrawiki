import CodeToClipboard from "./CodeToClipboard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Forms/CodeToClipboard",
  component: CodeToClipboard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The CodeHighlighter component is a tool that allows for syntax highlighting and displaying formatted source code in a user interface. To use it, you will need to have the react-syntax-highlighter dependency, which can be found on the GitHub repository of react-syntax-highlighter: https://github.com/react-syntax-highlighter",
        // You can add additional details here about usage, props, etc.
      },
    },
  },
  argTypes: {
    copyStyles: {
      control: "text",
      description: "The styles for the copy/copied button.",
    },
    showStyles: {
      control: "text",
      description: "The styles for the hide/show code button",
    },
    codeStyles: {
      control: "text",
      description: "Styles to apply at the code section",
    },
    showButton: {
      control: "boolean",
      description:
        "Set to false, will not display de showButton but it will display directly the code. Set to true, it will hide de code and show the show/hide button",
    },
    code: {
      control: "text",
      description: "The source code to be highlighted and displayed.",
    },
    language: {
      control: "text",
      description:
        "The programming language for syntax highlighting (e.g., 'javascript', 'python').",
    },
    theme: {
      control: "radio",
      options: ["dark", "light"],
      description: "The theme for the code section.",
    },
  },
} satisfies Meta<typeof CodeToClipboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    code: "function sayHello() {\n  console.log('Hello, World!');\n}",
    language: "javascript",
  },
};
