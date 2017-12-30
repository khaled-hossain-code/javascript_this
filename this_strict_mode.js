'use strict';
var bar = 'hello';
console.log(this);// {} / window

function fn () {
  console.log('fn:');
  console.log(this); //undefined / undefined
}

function fn1 () {
  console.log('fn1:');
  console.log(this.bar); //error / error
}

const fe = () => {
  console.log('fe:');
  console.log(this); // {} / window
}

const fe1 = () => {
  console.log('fe1:');
  console.log(this.bar); // undefined / hello
}

fn();
// fn1();

fe();
fe1();