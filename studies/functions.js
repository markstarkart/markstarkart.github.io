// FUNCTIONS:

// Functions allow us to contain a block of code, that we can execute whenever 
// we want and as many times as we want. Numbers are numeric data, Strings are 
// character data, think of Functions as logic data. Functions are like a 
// recipe, a list of instructions. Functions contain the code block. You can pass 
// around this block of code in your program, and execute the code at a later 
// point. 

// Two phases of using Functions

// declaration/definition: creating the Function. 
// invocation/calling/executing/applying: using the Function.

// Function Definitions

// You must define or declare your Function before you can use it. This is the 
// action of creating the code you want to execute when your Function is called. 
// Just like when making a cake, someone had to write down and give you the 
// recipe for baking a cake.

// The keyword to declare a Function is, function.

// function(parameterOne, parameterTwo) { 
// function body: code goes here, NOTE indentation! 
// }

// When creating our Functions, we can list any number of required inputs, 
// called parameters. They are listed in between parenthesis.

// function(numOne, numTwo) {
//   function body code...
//  }

// The Function above uses two parameters, numOne, numTwo. You should try to 
// name your parameters clearly no it is easier to know what need to be provided 
// when executing the Function. We can see that the above function should pass 
// two Number values.

//Functions return a single output, by default a Function will return undefined.

// console.log((function() {}())); // prints undefined

//We can explicitly return value by using the return keyword followed by a value.

// function(numOne, numTwo) { 
// return numOne + numTwo; 
// }

//Functions can be named, or assigned to variables or constants, or anonymous.

//A named Function:

// function add(numOne, numTwo) {
//  return numOne + numTwo;
// }

// The name of the above Function is add. Named Function definitions are hoisted 
// to the top of their scope, so they can be used in the program before they 
// appear to be sequentially defined.

// const sum = add(1, 1); //add is called before it appears to be defined. 
// console.log(sum); // prints 2 
// function add(numOne, numTwo) { 
// return numOne + numTwo;
// }

// Hoisting: 
// Before JavaScript begins to execute code in the script, it first scans the 
// scope in which it is executing, either the global scope or the scope of a 
// Function being executed. It hoists into memory named Function definitions and 
// any variables. Meaning named Functions can be called before they appear to be 
// defined. Above the named Function add() is called before its definition 
// appears sequentially in the code.

// Anonymous Functions:
// An anonymous Function is a Function without a name, the have been defined 
// without a name. Typically Anonymous functions are written while being passed 
// to other Functions.

// function printAlteredString(string, alterString) { 
// console.log(alterString(string)); 
// } 
// printAlteredString('hello', function(str) {return str.toUpperCase(); }); 
// prints 'HELLO';

// The anonymous Function above is defined on the fly as an argument being 
// passed to the Function, printAlteredString(). The anonymous Function gets put 
// into the parameter, alterString, which is then executed and passed to 
// console.log().

// Function Expressions

// A Function expression is formed when an anonymous Function is assigned to a 
// variable or constant.
// const sum = add(1, 1); // Throws an Error: TypeError: add is not a function 
// const add = function(numOne, numTwo) { 
// return numOne + numTwo; 
// };

// Trying to call add() before it’s assigned will throw an error. The reason for 
// is this is that the constant add is yet to be assigned!
// When using Function expressions, you can only call the Function after it has 
// been assigned to a variable or constant:
// const add = function(numOne, numTwo) {
// return numOne + numTwo; 
// }; 
// const sum = add(1, 1); 
// console.log(sum); // prints 2, no error…

// Functions in JavaScript are first class Objects, this is why we can assign 
// them to a varaible or constant.

// Calling a Function:
// We have to call a function to use it. Calling a Function will execute the code 
// with in the body(code block) of the Function. Executing, applying, invoking,
// running are all synonymous with calling a Function.

// Arguments:
// Arguments are the values we input into a Function. Arguments are like 
// passengers and parameters are the car seats. If a Function is defined with two 
// parameters, it’s like it has two car seats, that needs to arguments to fill 
// those seats. When the Function is called we will pass in two values, one for 
// each “seat”.
// To call a Function, you have to reference its name or the variable name to 
// which it is assigned, and input any values expected.

// const add = function(numOne, numTwo) { 
// return numOne + numTwo; 
// };
// const sum = add(1, 1); 
// console.log(sum); // prints 2

// The result of a Function can be assigned to a variable or constant. In the 
// example above, the constant, sum, is assigned the result of add(1, 1).

// Or, we can pass the invocation as a value to another Function as input:

// const add = function(numOne, numTwo) { 
// return numOne + numTwo; 
// }; 
// console.log(add(1, 1)); // prints 2

// Because they produce a value, all Functions are expressions.

// Scope:
// Scope refers to what variables are accessible and where.
// Global scope: the variable is accessible throughout the entire program.
// Local scope: refers to declarations made within the body of a function. 
// They are accessible inside the function, but not outside the scope of the 
// function.
// Nested scope: functions can be defined inside other functions. Variable 
// declarations made in the parent scope(the first function) are accessible by 
// any functions nested inside it. Variables declared inside the child 
// scope(the nested function) are only available inside the scope of the nested 
// function, if that function has a function nested inside it, it will be the 
// parent function to that nested function, and so on.

// Closure:
// Keeping access to values by enclosing them in functions. A Function 
// definition can carry references to values inside the body of its parent scope. 
// The Function definition forms a closure around it’s defined environment. 
// When the function is called, we gain access to the variables of its parent 
// scope.

