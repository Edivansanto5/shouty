
const Person = require('../src/shouty.js')

const { Given, When, Then } = require('@cucumber/cucumber')

Given('Lucy is located {int} metres from Sean', function (distance) {
    // Write code here that turns the phrase above into concrete actions
    // console.log(distance)
    this.Lucy = new Person;
    this.sean = new Person;
    this.Lucy.moveTo(distance)
  })
  
  When('Sean shouts {string}', function (message) {
    // Write code here that turns the phrase above into concrete actions
    this.sean.shout(message)
    return 'pending'
  })
  
  Then('Lucy hears Sean\'s message', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending'
  })