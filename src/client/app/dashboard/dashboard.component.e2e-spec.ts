describe('Dashboard', () => {

  beforeEach( () => {
    browser.get('/dashboard');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-about h2')).getText()).toEqual('Features');
  });

});
