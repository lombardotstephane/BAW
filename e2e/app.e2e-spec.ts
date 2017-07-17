import { BusinessAndWebPage } from './app.po';

describe('business-and-web App', () => {
  let page: BusinessAndWebPage;

  beforeEach(() => {
    page = new BusinessAndWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
