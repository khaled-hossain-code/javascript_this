console.log(this); // {} / window
var foo = 'hello';

function fn() {
  console.log(this); //global object of node / window
}

function fn1() {
  console.log(this.foo);// undefined / hello
}

const fe = () => {
  console.log(this); // {} / window
}

const fe1 = () => {
  console.log(this.foo); // undefined / hello
}

fn();
fn1();
fe();
fe1();
