import "angular2/testing";

export class SamTwoPage {
  navigateTo() { return browser.get('/'); }
  getParagraphText() { return element(by.css('SamTwo-app p')).getText(); }
}
