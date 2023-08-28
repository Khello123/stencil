import { newE2EPage } from '@stencil/core/testing';

describe('cm-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cm-tooltip></cm-tooltip>');

    const element = await page.find('cm-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
