import { HCLFRONTENDPage } from './app.po';

describe('hcl-frontend App', function() {
  let page: HCLFRONTENDPage;

  beforeEach(() => {
    page = new HCLFRONTENDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
