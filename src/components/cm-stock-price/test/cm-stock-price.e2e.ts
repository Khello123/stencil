import { newE2EPage } from '@stencil/core/testing';

describe('cm-stock-price', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cm-stock-price></cm-stock-price>');

    const element = await page.find('cm-stock-price');
    expect(element).toHaveClass('hydrated');
  });
});
