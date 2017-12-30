'use strict';
function foo(){
  this.baz = 'baz';
  // console.log(baz); //error
  console.log(this.baz);
  this.too = function(){
    console.log(this.baz);
  }
}

const obj1 = new foo();

obj1.too();
