import UserLogin from "./UserLogin";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "User Login",
  component: UserLogin,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClicked: { action: 'sign up clicked' }
  },
} as ComponentMeta<typeof UserLogin>;

const Template: ComponentStory<typeof UserLogin> = (args) => <UserLogin {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  username: 'kaboom',
  password: "Button",
};