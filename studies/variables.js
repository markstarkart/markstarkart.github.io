// VARIABLES:

// 0. Variables are containers to hold things during the life of a program. We can use variables. 
//     Variables are named identifiers to point to values of our data-types, like a 
//     Number, String, Boolean, Object, Array, Function, etcetera. We call them variables because
//     after we create them we can ALTER the value (and type of value) that they point to.

// 1.  To create a variable we the keyword, var, followed by a name for our variable. It is standard practice
//      to use camelCase declaring a variable.

// 2. There are two phases of using variables: declaration and initialization(or assignment). 

// 1.  declaration //
// var sampleString;
// 	At the declaration phase, the variable sampleString is undefined because //
//  we have not assigned it any value. //
// console.log(sampleString); // prints ⇒ undefined

// 2. initialization or assignment //
// sampleString = "I am string";
// console.log(sampleString); // prints => a string

// 3. re-assignment //
// sampleString = "still a string";
// console.log(sampleString); // prints => still a string

// NOTE: we can assign and re-assign anything to a variable - this is not 
// possible with constants 
// var myVariable = 1;
// myVariable = true;
// myVariable = "somestring";
// There are two more variable assignment keywords in JavaScript:

// 1. const; is a constant variable. It’s value cannot be reassigned or 
// deleted or redeclared after it is created.
// const x = y;

// const x will always equal y.
// If a const is an array or object, that cannot be changed but those 
// complex data-types can be added to.
// Const x = [];
// x.push(3,2);

// console.log(x); // prints [3,2] to console.

// 2. let; let is very similar to var in functionality, where the differ is 
// scope. The scope of var is the entire enclosing function. The scope of let 
// is limited to the block, statement, or expression that it is being used in



