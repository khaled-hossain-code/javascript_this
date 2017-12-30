'use strict';

const obj1 = {
  name: 'aryan',
  hobby: function(){
    console.log(this.name); // 'this' is obj1 
  },
  myHobby: () => {
    console.log(this.name); // 'this' is {}
  }
}

obj1.hobby();// aryan
obj1.myHobby();//undefined