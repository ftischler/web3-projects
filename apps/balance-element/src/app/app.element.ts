import { customElement, property } from 'lit/decorators.js';
import { css, html, LitElement } from 'lit';
import { Highlightable } from './mixins/highlightable';

import { ref, createRef, Ref } from 'lit/directives/ref.js';

import { timer } from 'rxjs';
import { subscribeDirective } from './directives/subscribe.directive';
import { Dialog } from '@material/mwc-dialog';

import '@material/mwc-dialog';
import '@material/mwc-button';

import * as card from '@material/card/mdc-card.scss';

const typography = css`
  p {
    color: black;
  }
`;

const matCard = [
  css`
    .mdc-card {
      padding: 20px;
    }
  `,
  css(card),
];

@customElement('highlightable-balance')
export class HighlightedBalance extends Highlightable(LitElement) {
  @property({ type: Number }) balance: number;

  render() {
    return this.renderHighlight(html`<span>${this.balance}</span>`);
  }
}

@customElement('balance-widget')
export class BalanceWidgetElement extends LitElement {
  static styles = [typography, matCard];

  @property({ type: Number }) balance = 0;

  dialog: Ref<Dialog> = createRef();

  private interval$ = timer(0, 1000);

  private;

  private onAddFunds(): void {
    this.dialog.value.open = !this.dialog.value.open;
  }

  private onDialogClose(e) {
    if (e.detail.action === 'yes') {
      this.balance = this.balance + Math.random() * 1000;
    }
  }

  render() {
    return html`
      <div class="mdc-card">
        <p>
          Showing your balance for ${subscribeDirective(this.interval$)} seconds
        </p>
        <p class="balance">
          Your balance is:
          <highlightable-balance
            balance="${this.balance}"
            highlight
          ></highlightable-balance>
        </p>
        <mwc-button outlined @click="${this.onAddFunds}">Add funds</mwc-button>
      </mwc-card>
      <mwc-dialog
        title="Are you sure ?"
        @closed=${this.onDialogClose}
        ${ref(this.dialog)}
      >
        <div>Are you sure you want to add funds?</div>
        <mwc-button slot="secondaryAction" dialogAction="no">No</mwc-button>
        <mwc-button slot="primaryAction" dialogAction="yes" raised
          >Yes</mwc-button
        >
      </mwc-dialog>
    `;
  }
}
