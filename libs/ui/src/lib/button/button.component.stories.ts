import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: ButtonComponent.name,
  component: ButtonComponent,
  argTypes: {
    iuType: {
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
  template: `<button uiBtn [iuType]="iuType">Click me!</button>`
});

export const Primary = Template.bind({});
Primary.args = {
  iuType: undefined
};

export const Secondary = Template.bind({});
Secondary.args = {
  iuType: 'secondary'
};

export const Danger = Template.bind({});
Danger.args = {
  iuType: 'danger'
};

export const Disabled = (args: ButtonComponent) => ({
  template: `<button uiBtn disabled>Click me!</button>`,
  props: { ...args },
});
Disabled.args = { }