import { render, screen } from '@testing-library/angular';

import { ModalComponent } from './modal.component';

describe(ModalComponent.name, () => {
  it('renders modal with content', async () => {
    await render('<ui-modal>Content</ui-modal>', {
      declarations: [ModalComponent],
    });
    expect(screen.getByRole('dialog', { name: /modal title/i }));
  });
});
