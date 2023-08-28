import { newSpecPage } from '@stencil/core/testing';
import { CmDrawer } from '../cm-drawer';

describe('cm-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmDrawer],
      html: `<cm-drawer></cm-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-drawer>
    `);
  });
});
