
const Person = require('../src/shouty.js')
const { assertThat, is } = require('hamjest')

const { Given, When, Then } = require('@cucumber/cucumber')

Given('Lucy is located {int} metres from Sean', function (distance) {
   
    this.Lucy = new Person;
    this.sean = new Person;
    this.Lucy.moveTo(distance)
  })
  
  When('Sean shouts {string}', function (message) {
    this.sean.shout(message);
    this.message = message;
    
  })
  
  Then('Lucy hears Sean\'s message', function () {
    // Write code here that turns the phrase above into concrete actions
    assertThat(this.lucy.messagesHeard(), is([this.message]))
  
  })