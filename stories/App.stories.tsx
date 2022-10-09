import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Home from "../pages";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Home",
  component: Home,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Home>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    name: "John Doe",
  },
};
