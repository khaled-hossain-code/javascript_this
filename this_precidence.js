'use strict';

function something(){
  this.hello = 'hello';
  console.log(this.hello, this.who);
}

var who = "something", foobar, bazbam, objbam,
    obj1 = {who: 'obj1', something: something},
    obj2 = { who: 'obj2'};

//something(); //error
obj1.something(); // hello obj1
console.log(obj1.hello); //hello

obj1.something.call(obj2); //hello obj2
console.log(obj2.hello); // hello

foobar = something.bind(obj2); // hard binding
foobar(); // hello obj2
foobar.call(obj1); // hello obj2 , as it is already hard binded doesn't matter what we pass

bazbam = new something(); // hello, undefined
console.log(bazbam.hello); // hello

objbam = new obj1.something();// hello, undefined
objbam = new foobar();// hello, undefined, it breaks the hard binding
