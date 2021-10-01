module.exports = {
    elements: {
      firstButton: 'locator Css or Xpath',
      secondButton: 'locator Css or Xpath',
      thirdButton: 'locator Css or Xpath',
      fourthButton: 'locator Css or Xpath',
      fifthButton: 'locator Css or Xpath',
      sixthButton: 'locator Css or Xpath',
      seventhButton: 'locator Css or Xpath',
      eighthButton: 'locator Css or Xpath',
      ninthButton: 'locator Css or Xpath',
      zeroButton: 'locator Css or Xpath',
    },
    commands: [{
      clickFirstButton() {
        return this
          .waitForElementPresent('@firstButton', 500)
          .click('@firstButton');
      },

      //........
    }],
  };