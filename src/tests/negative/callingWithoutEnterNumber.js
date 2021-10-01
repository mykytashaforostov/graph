module.exports = {
    '@tags': ['callProcess'],
    before(browser) {
      browser.globals.waitForConditionTimeout = 7000;
    },
  
    'The user can’t start the calling process without entering the number clicking on the [Call] button and can observe the alert message “Please, enter the number”': function (browser) {
      const callPage = browser.page.MainPage.callPage();
      const phoneNumber = "965511";
  
      callPage
        .navigate()
        .clickCallButton()
        .getStatusCodeOfCallProcess()
        //.asserts....
        .getAllertMeassge()
        //.asserts...
    },
    after(browser) {
      browser.end();
    },
  };