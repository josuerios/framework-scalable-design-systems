import { newSpecPage } from '@stencil/core/testing';
import { DtButton } from '../dt-button';

describe('dt-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DtButton],
      html: `<dt-button></dt-button>`,
    });
    expect(page.root).toEqualHtml(`
      <dt-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dt-button>
    `);
  });
});
