import { MiniCarSalesPage } from './app.po';

describe('mini-car-sales App', () => {
  let page: MiniCarSalesPage;

  beforeEach(() => {
    page = new MiniCarSalesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Mini Car Sales App');
  });
});
