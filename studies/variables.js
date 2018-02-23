// VARIABLES:

// 0. Variables are containers to hold things during the life of a program. We can use variables. 
//     Variables are named identifiers to point to values of our data-types, like a 
//     Number, String, Boolean, Object, Array, Function, etcetera. We call them variables because
//     after we create them we can ALTER the value (and type of value) that they point to.

// 1.  To create a variable we the keyword, var, followed by a name for our variable. It is standard practice
//      to use camelCase declaring a variable.

// 2. There are two phases of using variables: declaration and initialization(or assignment). 

//1.  declaration //
var sampleString;
	//At the declaration phase, the variable sampleString is undefined because //
 //we have not assigned it any value. //
console.log(sampleString); // prints ⇒ undefined

//2. initialization or assignment //
sampleString = "I am string";
console.log(sampleString); // prints => a string

//3. re-assignment //
sampleString = "still a string";
console.log(sampleString); // prints => still a string

//NOTE: we can assign and re-assign anything to a variable - this is not possible with constants //
var myVariable = 1;
myVariable = true;
myVariable = "somestring";
