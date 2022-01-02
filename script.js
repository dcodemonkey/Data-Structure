// Create a Hash Tables using Objects
let user = {
  age: 54,
  name: 'Suman',
  magic: true,
  scream: function() {
    console.log('Huaaaahhh!');
  }
}

// Displaying the value of user object
// console.log(user.age )// 54 O(1)
// console.log(user.magic) // true O(1)
// console.log(user.name) // Suman O(1)

// Adding a new value to the user object
user.spell = 'Abra ka Dabra';
console.log(user.spell);
// Display all user data 
console.log(user);