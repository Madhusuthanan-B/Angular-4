import { ReusableModulesPage } from './app.po';

describe('reusable-modules App', () => {
  let page: ReusableModulesPage;

  beforeEach(() => {
    page = new ReusableModulesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
