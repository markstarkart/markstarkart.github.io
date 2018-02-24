// DATA-TYPES:

// 0. Types of values. What is a data-type? It is a type of value.
	
// 1.  There are two kinds of data-types. Simple/ Primitive and Complex.

// 2. Simple / Primitive data-types:

// Number : Numeric data ex: 1, 2, 23234
// String : Character data must use “” or ‘’. Ex “a”, “George”, ‘one”
// Boolean : true or false 
// NaN : Not a Number (typeof NaN; // => ‘number’) 
// undefined : no-value, incept, uninitialized. 
// null : no-value, nullified by a programmer

// Why are they simple?
// 1. Because they are immutable. They do not hold, collect or aggregate other 
//values, nor perform operations on simple values that return new simple values,
//they do not change the original value.
// 2. Copy by value. When assigning or passing, simple data-types are copied 
//from one variable to the next.

// 3. Complex data-types:
 
// Object : key/value pairs {} contain objects
// Array: 0 indexed lists [] contain arrays
// Function:  encapsulate reusable code. Functions have 
// parameters(which are place holders 	for arguments. 
// function(parm1, parm2) {code to execute) when the parameters receive values 
// they become arguments

// Why are the complex? 
// 1. Complex values aggregate other values and are of indefinite size. 
// 2. Copy by reference - when assigning or passing, complex data-types are 
//     passed by reference.

// Primitive Types vs Complex Types;
// Because variables have a fixed amount of memory, variables can hold the 
// actual values of primitive types, because they are of a fixed size.  The 
// largest primitive, a Number takes up eight bytes of memory, exactly the size
// of memory allocated for a variable. Since complex types can be of infinite 
// size variables hold a reference to value. We often use the analogy that 
// variables are named-buckets into which we put values of a particular type.
// Example:

var age = 5;

// This “named-bucket” has a value of 5, it is a Number data-type.

// Primitives are atomic and immutable

// Atomic: there's only ever a singular value in a Number

var age = 5;

//Operations on primitives return NEW primitives

var nameFirst = 'Erika';
var fullName = nameFirst + ' Fraboni';
console.log(nameFirst); // prints 'Erika'
console.log(fullName); // prints 'Erika Fraboni'

// Copy by Value vs Copy by Reference:
// Remember:

// Primitives types are copied by value:

var a = 1;
var b = a; 
// the value stored in a is COPIED into b b = 2; 
// changing the value at b doesn't effect what is stored in a 
console.log(a); // prints 1

//Complex types are copied by Reference:

var a = {one: 'foo'};

// Here, the value stored in b is a REFERENCE to the value stored in a 
// - they now both point to the same object 

var b = a;

//Changing the value at b effects all references because the value is reference 
//to the same object 


b.one = 'bar'; 
console.log(a.one);  // prints "bar"

//The same is true when passing values to a function call:

function doSomething(z) {
    z += 1;
}

var a = 1;

doSomething(a);

//Prints 1, not 2, as the value at a is copied when passed to the invocation of doSomething. 

console.log(a);

// Properties and Methods of Data Types:

// In JavaScript many data-types have methods and properties. Arrays have a 
// length property and other methods to help you access and manipulate the data
// contained in an Array:

var array = [1, 2, 3]; 
console.log(array.length); // prints 3 
array.push(4); // a method to add values to the end of an Array - returns 
                    // the new length of the Array 
array.pop(); // a method that removes the last value in the Array 

//In reality Arrays are just Objects designed to act as arrays. Applying the 
//typeof operator to an Array will return an “object”.

console.log(typeof []); // => 'object'

// The properties and behaviors of an Array are really just key value pairs of 
// an Object returned from a Constructor Function, Array.

// Primitive data types are not really derived from the basic Object type in 
// JavaScript, like they are in some other languages like Ruby. When you use a 
// method of String, the value of the String is encased in an Object that 
// provides the String methods, like split(), replace(), slice(),etc.

