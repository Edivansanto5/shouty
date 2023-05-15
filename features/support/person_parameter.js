const Person = require('@cucumber/cucumber')
const {defineParameterType} = require('@cucumber/cucumber')

defineParameterType({
    name:'person',
    regexp:'/Lucy|Sean/',
})