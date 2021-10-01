module.exports = {
    '@tags': ['callProcess'],
    before(browser) {
      browser.globals.waitForConditionTimeout = 7000;
    },
  
    'The user can hang up the call after calling process is started by pressing the [Hang Up] button': function (browser) {
      const callPage = browser.page.MainPage.callPage();
      const phoneNumber = "965511";
  
      callPage
        .navigate()
        .typePhoneNumber(phoneNumber)
        .verifyNumberOutpur(phoneNumber)
        .clickCallButton()
        .getStatusCodeOfCallProcess()
        //.asserts....
        .getMessageOfStartingCallingProcess()
        .clickHangUpButton()
        .getStatusCodeOfCallProcess()
        //.asserts...
    },
    after(browser) {
      browser.end();
    },
  };
  