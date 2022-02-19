import { css, html, LitElement } from 'lit';
import { Constructor } from 'type-fest';
import { property } from 'lit/decorators.js';

import { classMap } from 'lit/directives/class-map.js';

export const Highlightable = <T extends Constructor<LitElement>>(base: T) => {
  class HighlightableElement extends base {
    static styles = css`
      .highlight {
        background: yellow;
      }
    `;

    @property({ type: Boolean }) highlight = false;

    renderHighlight(content: unknown) {
      return html` <div class=${classMap({ highlight: this.highlight })}>
        ${content}
      </div>`;
    }
  }

  return HighlightableElement as Constructor<HighlightableElement> & T;
};
