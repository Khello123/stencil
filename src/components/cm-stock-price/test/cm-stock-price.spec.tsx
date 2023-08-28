import { newSpecPage } from '@stencil/core/testing';
import { CmStockPrice } from '../cm-stock-price';

describe('cm-stock-price', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmStockPrice],
      html: `<cm-stock-price></cm-stock-price>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-stock-price>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-stock-price>
    `);
  });
});
