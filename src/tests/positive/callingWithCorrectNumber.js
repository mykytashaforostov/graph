module.exports = {
    '@tags': ['callProcess'],
    before(browser) {
      browser.globals.waitForConditionTimeout = 7000;
    },
  
    'The user can enter the correct number and press the button and the call process will be started': function (browser) {
      const callPage = browser.page.MainPage.callPage();
      const phoneNumber = "965511";
  
      callPage
        .navigate()
        .typePhoneNumber(phoneNumber)
        .verifyNumberOutput(phoneNumber)
        .clickCallButton()
        .getStatusCodeOfCallProcess()
        .getMessageOfStartingCallingProcess()
        //.asserts....
    },
    after(browser) {
      browser.end();
    },
  };
  