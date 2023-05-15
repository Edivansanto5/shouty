const Person = require('../../src/shouty')
const {Given,When,Then} = require("@cucumber/cucumber");
const { assertThat, is } = require('hamjest')

Given('Lucy is located {int} metres from Sean', function (distance) {
    console.log(`Lucy is ${distance * 100} centimetres from Sean`)

    // this.lucy = new Person;
    // this.sean = new Person;
    // this.lucy.moveTo(distance)
  
});

When('Sean shouts {string}', function (message) {
    // Write code here that turns the phrase above into concrete actions
    this.sean.shout(message)
    this.message = message
});

Then('Lucy hears Sean\'s message', function () {
    assertThat(this.lucy.messagesHeard(), is([this.message]))

});

