import { render, screen } from '@testing-library/angular';
import { ButtonComponent } from './button.component';

describe(ButtonComponent.name, () => {
  it('renders primary button with default args', async () => {
    await render('<button uiBtn>Button</button>', {
      declarations: [ButtonComponent]
    });
    const button = screen.getByRole('button');
    expect(button).toHaveClass('iu-button');
  });

  it('renders secondary button', async () => {
    await render('<button uiBtn type="secondary">Button</button>', {
      declarations: [ButtonComponent]
    });
    const button = screen.getByRole('button');
    expect(button).toHaveClass('iu-button--secondary');
  });

  it('renders danger button', async () => {
    await render('<button uiBtn type="danger">Button</button>', {
      declarations: [ButtonComponent]
    });
    const button = screen.getByRole('button');
    expect(button).toHaveClass('iu-button--danger');
  });
})