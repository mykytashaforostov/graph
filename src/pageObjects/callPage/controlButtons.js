module.exports = {
    elements: {
      callButton: 'locator Css or Xpath',
      hangUpButton: 'locator Css or Xpath',
    },
    commands: [{
      getStatusCodeOfCallProcess(email, title) {
        browser.perform(done => {
            request('template ', function (error, response, body) {
                browser.assert.equal(response.statusCode, 200);
                done()
                ///etc
            });
        })
      },
  
      clickCallButton() {
        return this
          .waitForElementPresent('@callButton', 500)
          .click('@callButton');
      },

      clickHangUpButton() {
        return this
          .waitForElementPresent('@hangUpButton', 500)
          .click('@hangUpButton');
      },
      //....
    }],
  };
  