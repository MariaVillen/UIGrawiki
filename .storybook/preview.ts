import type { Preview } from "@storybook/react";
import "../src/styles/index.css";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#10162F",
        },
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "gray",
          value: "#888888",
        },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
