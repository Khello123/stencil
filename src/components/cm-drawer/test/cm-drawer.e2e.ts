import { newE2EPage } from '@stencil/core/testing';

describe('cm-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cm-drawer></cm-drawer>');

    const element = await page.find('cm-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
