import { customElement, property } from 'lit/decorators.js';
import { css, html, LitElement } from 'lit';

const typography = css`
  p {
    color: red;
  }
`;

@customElement('balance-widget')
export class BalanaceWidgetElement extends LitElement {
  static styles = [typography];

  @property() balance = 0;

  render() {
    return html`
      <p>Your balance is ${this.balance}</p>
      <button>Add funds</button>
    `;
  }
}
