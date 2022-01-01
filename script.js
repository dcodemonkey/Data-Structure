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

/* ---------------Classes in JS: Starts ---------------- */

// reference type
// [] === []; // false
// var object1 = { value: 10 }
// var object2 = object1;
// var object3 = { value: 10 };

// console.log(object1 === object2); // true
// console.log(object1 === object3); // false

// object1.value = 15;
// console.log(object2.value);

// // context

// const object4 = {
//   a: function () {
//     console.log(this);
//   }
// }

// // instantiation
// class Player {
//   constructor(name, type) {
//     console.log(this);
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
//   }
// }

// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type)
//   }
//   play() {
//     console.log(`WEEEEEE I'm a ${this.type}`);
//   }
// }

// const wizard = new Wizard('Kunal', 'Healer');
// const wizard2 = new Wizard('Rohan', 'Dark Magic');

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

/* ---------------Classes in JS: Ends---------------- */


/* ---------------Implementing An Array: Starts---------------- */
/*
class MyArray {
  constructor(){
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('Hi');
newArray.push('you');
newArray.push('!');
console.log(newArray);
// newArray.pop();
// newArray.pop();
newArray.delete(1);
console.log(newArray);
*/
/* ---------------Implementing An Array: Ends---------------- */


/* ---------------Reverse a Array: Starts---------------- */
/*
Create a function that reverses a string:
'Hi My Name is Kunal' should be:
'lanuK si emaN yM iH'


*/

// function reverse(str) {
//   // check input 
//   if(!str || str.length < 2 || typeof str !== 'string') {
//     return 'Hmmm thats not good';
//   }

//   const backwards = [];
//   const totalItems = str.length - 1;
//   for(let i = totalItems; i >= 0; i--) {
//     backwards.push(str[i]);
//   }
//   console.log(backwards);
//   return backwards.join('');
// }
// console.log(reverse('Hi My Name is Kunal'));

// function reverse2(str) {
//   return str.split('').reverse().join('');
// }
// console.log(reverse2('Hi My Name is Kunal'));

// const reverse3 = str => str.split('').reverse().join('');
// console.log(reverse3('Hi My Name is Kunal'));

const reverse4 = str => [...str].reverse().join('');
console.log(reverse4('Hi My Name is Kunal'));
console.log(reverse4('lanuK si emaN yM iH'));

/* ---------------Reverse a Array: Ends---------------- */