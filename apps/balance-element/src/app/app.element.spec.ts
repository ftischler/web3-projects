import { BalanceWidgetElement } from './app.element';

describe('AppElement', () => {
  let app: BalanceWidgetElement;

  beforeEach(() => {
    app = new BalanceWidgetElement();
  });

  it('should create successfully', () => {
    expect(app).toBeTruthy();
  });

  it('should have a greeting', () => {
    app.connectedCallback();

    expect(app.querySelector('.balance').innerHTML).toContain(
      'Your balance is:'
    );
  });
});
