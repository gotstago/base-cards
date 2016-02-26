import "angular2/testing";
import { SamTwoPage } from './app.po';

describe('sam-two App', function() {
  let page: SamTwoPage;

  beforeEach(() => {
    page = new SamTwoPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('sam-two Works!');
  });
});
