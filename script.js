const strings = ['a', 'b', 'c', 'd'];
// 4 * 4 = 16 bytes of storage
// console.log(strings[2]);

// push()
strings.push('e');
// console.log(strings);

// pop()
strings.pop(); // item 'e' wil be removed from array
// console.log(strings);

// unshift()
strings.unshift('x'); // item 'x' will be added to the begining of the string array, BigO =  O(n)
// console.log(strings);

// splice()
strings.splice(2, 0, 'Alien'); // item 'Alien' will be added at index 2 of the string array, BigO =  O(n/2)
// console.log(strings);
