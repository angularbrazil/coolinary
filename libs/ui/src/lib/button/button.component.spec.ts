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
    await render('<button uiBtn iuType="secondary">Button</button>', {
      declarations: [ButtonComponent]
    });
    const button = screen.getByRole('button');
    expect(button).toHaveClass('iu-button--secondary');
  });

  it('renders danger button', async () => {
    await render('<button uiBtn iuType="danger">Button</button>', {
      declarations: [ButtonComponent]
    });
    const button = screen.getByRole('button');
    expect(button).toHaveClass('iu-button--danger');
  });

  it('renders disabled button', async () => {
    await render('<button uiBtn [disabled]="true">Button</button>', {
      declarations: [ButtonComponent]
    });
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
  it('renders text button', async () => {
    await render('<button uiBtn iuVariant="text">Button</button>', {
      declarations: [ButtonComponent]
    });
    const button = screen.getByRole('button');
    expect(button).toHaveClass('iu-button--text');
  });
})
