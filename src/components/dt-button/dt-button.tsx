import { Component, h, Prop } from '@stencil/core';

export type DtButtonVariant = 'principal' | 'outline';
export type DtButtonColor = 'primary' | 'secondary';

@Component({
  tag: 'dt-button',
  styleUrl: 'dt-button.css',
  shadow: true,
})
export class DtButton {

  /**
   * The button variant
   */
  @Prop() variant: DtButtonVariant = 'principal';

  /**
   * The button color
   */
  @Prop() color: DtButtonColor = 'primary';

  /**
   * Disabled state for the button
   */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <button disabled={this.disabled} class={this.classes}>
        <slot></slot>
      </button>
    );
  }

  get classes() {
    return `dt-button dt-button-${this.color} dt-button-${this.variant}`;
  }

}
