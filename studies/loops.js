// LOOPS:

// Loops are a built in constructs of JavaScript. The let us execute a block of 
// code as many as we want. They are very useful for iterating over collections 
// of data. By doing so, we can pull values out of a collection to work with 
// them, one by one. 

// The for Loop: is great for iterating over arrays.

// The three statements to for-loop configuration:
// 1. var i = 0; // initialize an index(in this case 0)
// //(i stands for index, but you can use any variable we choose, 
// // but i is standard)
// 2. I < nameOfVariable.length; // condition to stop looping
// 3. I++; // increments our index by 1 each loop
// These statements all go in parenthesis after the key word for. They are 
// separated by a comma.

for(var i = 0; i < nameOfVariable.length; i++) { 
console.log(i);
console.log(names[i].toUpperCase()); 
}

//looping backward over array

for (var i = nameOfVariable.length - 1; i > -1; i--) {
console.log(i); 
console.log(names[i].toUpperCase()); 
}

// The for‑in Loop (designed for iterating/looping over Objects): accesses the 
// keys of an Object, one by one, and allows you to use the key to get the value 
// of an Object.

var person = { nameFirst: 'John', nameLast: 'Jones' }; 
for (var key in person) { 
console.log(person[key]); 
}

// Keys are basically Strings. Above, the variable key is populated, one by one, 
// with the keys of the person Object. We use those keys to get the values from 
// the person Object.

// Array-syntax can be used with Objects. Using the brackets, you can pass a 
// String you know to be a key of an Object, and this will resolve to the value 
// at that key.

// WARNING!  While looping over Objects, new‑comers often think that the key 
// should be used with dot‑syntax, like so

// WRONG : DON'T 
for (var key in person) { 
console.log(person.key); // looks for a property called "key" on person - 
// there isn't one! 
}

// The While Loop: Uses the keyword, while, then in parenthesis, states a 
// condition that while true will continue to execute the block of code in the 
// body of the while-loop.

var count = -1; 
while(count < 10) { 
console.log(count); count++; 
}

// Set up a break-out of your while loop. Forgetting to increment the variable 
// used in the while-condition(above, this is the count variable), will lead to 
// an infinite loop, and crash your program.

