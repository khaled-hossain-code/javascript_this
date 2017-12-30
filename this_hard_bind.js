'use strict';
var foo = 'hello';
const obj1 = { foo: 'i am obj1' };
const obj2 = { foo: 'i am obj2' };

function bar() {
  console.log(this.foo);
}

// bar();// error / hello
var bar2 = bar.bind(obj2);
bar2(); // i am obj2
bar.call(obj1); // i am obj1
bar.apply(obj1); // i am obj1
