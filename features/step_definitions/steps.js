
const {Given,When,Then} = require("@cucumber/cucumber");

Given('{person} is located/standing {int} metre(s) from Sean', function (lucy, distance) {
    console.log(`Lucy is ${distance * 100} centimetres from sean`)
});

When('Sean shouts "free bagels at Sean\'s"', function () {
   
});

Then('Lucy hears Sean\'s message', function () {

});

