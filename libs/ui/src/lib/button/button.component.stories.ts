import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: ButtonComponent.name,
  component: ButtonComponent,
  argTypes: {
    iuType: {
      description: `Define o tipo do botão`,
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'radio' }
    },
    iuVariant: {
      description: 'Define a variante do botão',
      defaultValue: 'default',
      options: ['default', 'text', 'outlined'],
      control: { type: 'radio' }
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
  template: `<button uiBtn [iuType]="iuType" [iuVariant]="iuVariant">Click me!</button>`
});

export const Default = Template.bind({});
Default.args = { };

export const Disabled = (args: ButtonComponent) => ({
  template: `<button uiBtn disabled>Click me!</button>`,
  props: { ...args },
});
Disabled.args = { }
