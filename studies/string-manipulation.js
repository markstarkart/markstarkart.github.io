// STRING-MANIPULATION:

// Methods for accessing and altering strings.

// String : Character data must use “” or ‘’. Ex “a”, “George”, ‘one”

// There are several useful methods built into JavaScript to manipulate Strings.
// We can find the length of a text String, join or split a string, substitute 
// one character in a string for another, and more.

// Finding the length of String: 
// .length - gives us the length of a sting.
var string = “I am a string”;
console.log(string.length); // prints 13 to console.

// Retrieving a specific string character:
// To do this we use square bracket notation,[]. By placing the square brackets 
// at the end of the variable name with the number of the character we want to 
// return.

console.log(string[3]); // prints “m” to console. Computers start counting from 0! 
console.log(string[string.length-1]); //prints “g” to console. 
// [.length-1] will give the last character of the string.
//The charAt() method will also achieve this.
console.log(string.charAt(3)); //prints “m” to console

// Finding a substring inside a string and extracting it:
// 1.If you want to find if a substring is present inside inside a string, you 
// can use indexOf()

console.log(string.indexOf(“am”)); // prints 2 to console.
//We get the result 2 because the substring “am” begins at position 2.

2.console.log(string.indexOf("not")); // prints -1 to console.
//We get -1 because “not” is not apart of the string. 

// 3. If you know where your substring starts inside the string, and you know 
// what character you want it to end, slice() can be used to extract it.

console.log(string.slice(0, 4)); // prints “I am” to console.
// The first parameter is the position to start at, and the second parameter 
// is the position after the last one to be extracted.

// 4.If you know you want to extract all the remaining characters after your 
// start point, you don’t have to include the second parameter.

console.log(string.slice(7));// prints “string” to console.


// Changing case: 
// toLowerCase() and to UpperCase() take a string and change all the characters 
// to lower or uppercase.
console.log(string.toLowerCase()); // prints “i am a string” to console.

console.log(string.toUpperCase()); // prints “I AM A STRING” to console.

// Updating parts of a String:
// You can replace one substring inside another substring using the replace() 
// method. It uses two parameters, the string you want to replace and the string 
// you want to replace it with.

console.log(string.replace(‘I am’, ‘You are’)); // prints “You are a string” 
// to console.
// **to actually get the updated value reflected in our example variable string,
// you would have to set the variable to be the result of the operation, it will
// not update the string automatically.

string = string.replace(‘I am’, ‘You are’)
console.log(string); // prints “You are a string” to console.

//Joining two strings together: The concat() method.

var text1 = ‘Hello’;
var text2 = “World!”;
var text3 = text1.concat(“ “, text2);
console.log(text3); // prints “Hello World!” to console.

//The plus operator can also be used for this.
var text4 = text1 + “ “ + text2;
console.log(text4); // prints “Hello World” to console.

Converting a String into an Array: split() method.

var strToArr = ‘a, b, c, d’;
console.log(strToArr.split(“,”)); // prints ["a", " b", " c", " d"] to console
console.log(strToArr.split(' ')); // prints ["a,", "b,", "c,", "d"] to console
console.log(strToArr.split('|'));// prints ["a, b, c, d"] to console
console.log(strToArr.split(''));
// prints ["a", ",", " ", "b", ",", " ", "c", ",", " ", "d"] to console.
