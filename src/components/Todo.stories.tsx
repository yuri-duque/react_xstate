import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Todo from "./Todo";

const meta: Meta<typeof Todo> = {
  title: "Todo",
  component: Todo,
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
