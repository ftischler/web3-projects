import { customElement, property } from 'lit/decorators.js';
import { css, html, LitElement } from 'lit';
import { Observable, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { subscribeDirective } from './directives/subscribe.directive';

const typography = css`
  pre {
    color: red;
  }
`;

@customElement('api-element')
export class ApiElement extends LitElement {
  @property() apiUrl =
    'https://6211522201ccdac0742169c1.mockapi.io/api/v1/test';

  static styles = [typography];

  randomString: Observable<string> = fromFetch(this.apiUrl).pipe(
    switchMap((res) => res.text())
  );

  render() {
    return html`<pre>${subscribeDirective(this.randomString)}</pre>`;
  }
}
