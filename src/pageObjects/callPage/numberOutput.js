module.exports = {
    elements: {
      numberOutput: 'locator Css or Xpath',
    },
    commands: [{
        getPhoneNumberFromOutPut(phoneNumber, title) {
            // get sex on main info tab
            return this
              .waitForElementPresent('@numberOutput', 500)
              .assert.containsText('@numberOutput', phoneNumber, title);
          },
          //.....
    }],
  };