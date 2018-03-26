import { MyCompResolAppPage } from './app.po';

describe('my-comp-resol-app App', function() {
  let page: MyCompResolAppPage;

  beforeEach(() => {
    page = new MyCompResolAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
