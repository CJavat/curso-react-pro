import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type Props } from "../components/MyLabel";

const meta: Meta<Props> = {
  title: 'MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio' },
    fontColor: { control: 'color' },
    allCaps: { control: 'inline-radio' },
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof MyLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'Basic Label'
  }
};

export const AllCaps: Story = {
  args: {
    label: 'AllCaps Label',
    allCaps: true,
  }
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Label',
    color: 'text-secondary'
  }
};

export const CustomColors: Story = {
  args: {
    label: 'CustomColors Label',
    fontColor: '#5517AC'
  }
};