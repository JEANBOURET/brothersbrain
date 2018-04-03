import { BrothersBrainAppPage } from './app.po';

describe('brothers-brain-app App', () => {
  let page: BrothersBrainAppPage;

  beforeEach(() => {
    page = new BrothersBrainAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
