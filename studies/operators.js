// // OPERATORS: 

// // Taking action on variables.

// // Operators act on out data. They let us assign, compare, or use our data in 
// // arithmetic. Operators are classed by what they do and how many operands they 
// // require. Operands are the values acted upon by the Operators. Unary operators 
// // work with one value, binary with two. Ternary with three.

// // Types of Operators:

// // Assignment operators:  the = character allows us to assign value to a variable. 

// var x = 5; 

// // Comparison operators: Comparison Operators compare two values (two operands) 
// // and evaluate to a Boolean , true or false . < less than, 
// // <= less than or equal to, > greater than, >= greater than or equal to, 
// // == equal to, === strictly equal to, !== strictly not equal to. Strict 
// // comparison takes into account value and type. ALWAYS use strict comparison, 
// // unless you have good reason not to, which is basically never.

// // Binary Comparison Operators:
// console.log(1 < 2); 
// console.log(1 + 1 / 3 > 2); 
// console.log(1 <= 2); 
// console.log(1 >= 2);
// console.log(2 === 2); 
// console.log("2" == 2); 
// console.log(2 !== 2);
// console.log("1" != 1);

// // Arithmetic operators:  Arithmetic perform math on variables. + addition, 
// // - subtraction, * multiplication, / division, % modulo : returns the 
// // remainder of a division operation, ++ incrementation by 1, 
// // -- de-incrementation by 1.

// console.log(1 + 1);
// console.log(1 - 1);
// console.log(1 * 2);
// console.log(1 / 2); 
// console.log(4 % 4); // prints 0 
// console.log(4 % 3); // prints 1 //

// // Some other useful operators examples 
// var z = 2;

// z = z + 1; 

// z++; // same as above, using unary ++ 
// z = z - 1;

// z--; // same as above, using unary -- 

// // ++ before or after the value:
// // a. before increments value immediately
// // b. after will pass the current value to some operation, then increment the 
// // value

// console.log("z: " + z++); 
// console.log("z: " + z);
// z = z + 1; 

// console.log("z: " + z); 
// console.log("z: ", ++z); 
// console.log("z: " + z); 

// console.log(--z); 
// console.log(z++); 
// console.log(z--); 

// console.log(z += 2); 
// z = z + 2; 
// console.log(z -= 2); 
// z = z - 2; 
// console.log(z *= 2); 
// z = z * 2; 
// console.log(z /= 2); 
// z = z / 2; 

// // NEGATION: A unary Arithmetic Operator - the minus sign flips the positive or 
// // negative value of a Number

// var a = 1;
// console.log(-a); // prints -1
// var b = -1; 
// console.log(-b); // prints 1 

// // Logical operators: Evaluate and compare conditions. && is the AND operator: 
// // Both conditions must resolve to true. || is the OR operator: One or the other 
// // must resolve to true. ! is the bang operator: Flips the trutiness of the 
// // value.

// console.log(1 < 2 && 1 > 0); 
// console.log(2 < 2 || 1 > 0); 
// console.log(2 === 2 || 1 > 0); // short circuit: the 1 > 0 is never considered 

// //Like saying if NOT true 
// console.log(!true); // prints false
// //Like saying if NOT false
// console.log(!false); // prints true 

// //Often used for checking if a variable has a truthy value 
// var result = "";
//  if(!result) { 
// console.log('There was no result');
// }

// // The Double Bang
// // The double bang is just two bang operators together, coercess a value to 
// // Boolean. If it was falsey (0, null, undefined, etc), it will be false, 
// // otherwise, true.

// console.log(!!1); // prints true 
// console.log(!!-1); // prints true 
// console.log(!!0); // prints false

// // String operators: Comparison operators and the concatenation operator (+) 
// // work on Strings. Concatenation brings Operand Strings together and returns a 
// // new String.

// var a = 'Hello'; 
// var b = 'World!'; 
// console.log(a + ' ' + b); // prints 'Hello World!'

// //+= can also be used as shorthand:

// var message = 'Hello'; 
// message += ' World!'; 
// console.log(message); // prints 'Hello World!' 

// //same as doing: 
// var message = 'Hello';
// message = message + ' World!'; 
// console.log(message); // prints 'Hello World!'

// // Conditional (ternary) operator:  This is the only operator that uses three 
// // operands. The Operator can have one of two values based on a condition.

// // condition ? val1 : val2

// // If condition is true, the operator has the value of val1. Otherwise it has 
// // the value of val2. You can use the conditional operator anywhere you would 
// // use a standard operator.
// // For example,

// var status = (age >= 18) ? 'adult' : 'minor';

// // This statement assigns the value "adult" to the variable status if age is 
// // eighteen or more. Otherwise, it assigns the value "minor" to status.


 
// // Unary operators:  
// // A unary operator requires one operand before or after the operator. 
// // typeof, delete, void(The void operator specifies an expression to be 
// // evaluated without returning a value)  are examples.

// // x = 42;
// // var y = 43;
// // myobj = new Number();
// // myobj.h = 4;    // create property h
// // delete x;       // returns true (can delete if declared implicitly)
// // delete y;       // returns false (cannot delete if declared with var)
// // delete Math.PI; // returns false (cannot delete predefined properties)
// // delete myobj.h; // returns true (can delete user-defined properties)
// // delete myobj;   // returns true (can delete if declared implicitly)


// //negation, the bang operator: flips the truthiness of a value 

// console.log(!true); 
// console.log(!false); 
// console.log(!null); 

// var contact; 
// console.log(contact); 
// contact = 'Derrek'; 
// console.log(contact); 
// contact = null; 
// console.log(contact); 

// if (contact) { 
// console.log( 'we have contact');
// } 

// contact = 'Taylor'; 
// console.log(contact);
 
// if (contact) { 
// console.log( 'we have contact');
// }
// // typeof operator: this unary operator is used to return a String telling us 
// // what type the value is.

// typeof 1; // => 'number' 
// typeof 'a'; // => 'string' 
// typeof false; // => 'boolean'

// // typeof does not work well for some date-types. Array, null, and Date will 
// // return ‘object’ when tested with typeof, because these values are actually 
// // objects. JavaScript as some workarounds for dealing with these data-types

// // Array.isArray():
// Array.isArray([]) // => true; 
// Array.isArray({}) // => false; 

// // Array.myArray() is a utility method that is a property of the Array 
// // Constructor Function. Functions in JavaScript are first class Objects and 
// // like any Object, can have properties.  

// // The instanceof is a binary operator that compares a value’s prototypal chain 
// // to its Constructor Function(the Function from which the instance of the value 
// // was created, if any).

// // An Object Intended to be a Collection (Eliminating Non Object Objects): a 
// // multi step function to ensure your Object is really an Object.

// function isObject(value) {
//  // Arrays will test positive for Object if used with typeof, so use Array.i sArray() // 
// if(Array.isArray(value)) return false;

// // null will test positive for Object if used with typeof, so test using strict comparison // 
// if(value === null) return false;

//  // Date will test positive for Object if used with typeof, so test using in stanceof //
//  if(value instanceof Date) return false;

// // Finally, we're clear to use typeof on any other value //
// if(typeof value === 'object') return true; 
// }