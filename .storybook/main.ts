const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-xstate-addon/preset",
  ],
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;
