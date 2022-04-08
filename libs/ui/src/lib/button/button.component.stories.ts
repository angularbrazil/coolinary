import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: ButtonComponent.name,
  component: ButtonComponent,
  argTypes: {
    type: {
      description: `Define o tipo do botão`,
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'radio'}
    }
  },
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [ButtonComponent]
    })
  ],
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: `<button uiBtn [type]="type">Click me!</button>`
});

export const Primary = Template.bind({});
Primary.args = {
  type: undefined
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary'
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger'
};