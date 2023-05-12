const Person = require('../../src/shouty')
const {Given,When,Then} = require("@cucumber/cucumber");

  Given('Lucy is located {int} metres from Sean', function (distance) {
    this.lucy = new Person;
    this.sean = new Person;
    this.lucy.moveTo(distance)
    // console.log(distance)
    // console.log('Lucy estar á',distance,'Metros de distancia')
    // return 'pending';
  });


  When('Sean shouts {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  Then('Lucy hears Sean\'s message', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });