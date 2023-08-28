import { newSpecPage } from '@stencil/core/testing';
import { CmTooltip } from '../cm-tooltip';

describe('cm-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmTooltip],
      html: `<cm-tooltip></cm-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-tooltip>
    `);
  });
});
