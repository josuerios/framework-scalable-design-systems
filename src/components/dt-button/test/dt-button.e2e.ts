import { newE2EPage } from '@stencil/core/testing';

describe('dt-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dt-button></dt-button>');

    const element = await page.find('dt-button');
    expect(element).toHaveClass('hydrated');
  });
});
