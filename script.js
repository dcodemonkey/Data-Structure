// const strings = ['a', 'b', 'c', 'd'];
// // 4 * 4 = 16 bytes of storage
// // console.log(strings[2]);

// // push()
// strings.push('e');
// // console.log(strings);

// // pop()
// strings.pop(); // item 'e' wil be removed from array
// // console.log(strings);

// // unshift()
// strings.unshift('x'); // item 'x' will be added to the begining of the string array, BigO =  O(n)
// // console.log(strings);

// // splice()
// strings.splice(2, 0, 'Alien'); // item 'Alien' will be added at index 2 of the string array, BigO =  O(n/2)
// // console.log(strings);

/* ---------------Classes in JS---------------- */

// reference type
[] === []; // false
var object1 = { value: 10 }
var object2 = object1;
var object3 = { value: 10 };

console.log(object1 === object2); // true
console.log(object1 === object3); // false

object1.value = 15;
console.log(object2.value);

// context

const object4 = {
  a: function () {
    console.log(this);
  }
}

// instantiation
class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`WEEEEEE I'm a ${this.type}`);
  }
}

const wizard = new Wizard('Kunal', 'Healer');
const wizard2 = new Wizard('Rohan', 'Dark Magic');

// Classical Ingeritance

// var player = function(name, type) {
//   this.name = name;
//   this.type = type;
// }

// Player.prototype.introduce = function() {
//   console.log(`Hi I am ${this.name}, I'm ${this.type}`);
// }

// var wizard1 = new Player('Kunal', 'Healer');
// var wizard2 = new Player('Rohan', 'Dark Magic');

// wizard1.play = function() {
//   console.log(`WEEEEEE I'm a ${this.type}`);
// }

// wizard2.play = function() {
//   console.log(`WEEEEEE I'm a ${this.type}`);
// }