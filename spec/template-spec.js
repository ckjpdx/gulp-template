var testVar = require('./../js/template-interface.js').testModule;

describe('test to make sure everything is hooked up right', function(){
  it('should alert the contents of testVar, a string "test var"', function(){
    alert(testVar);
  });
});
