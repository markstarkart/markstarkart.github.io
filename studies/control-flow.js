// // CONTROL FLOW:

// // JavaScript supports a compact set of statements, specifically control flow 
// // statements, that you can use to incorporate a lot of interactivity in into 
// // your application.

// // Block statement: The most basic block statement is a block statement used to 
// // group statements. The block is contained by curly brackets {}.

// // {
// // statement_1;
// // statement_2;
// // .
// // .
// // .
// // Statment_n:
// // }

// // Block statements are commonly used with control flow 
// // statements(e.g. if, for, while).

// while (x < 10) {
// x++;
// }

// // Here , { x++:} is the block statement.

// // ****block statements do not define scope****

// var x = 1;
// {
// var x = 2;
// }
// console.log(x); // prints 2 to console.

// // Conditional statements: a conditional statement is a set of commands the 
// // execute if a specifies condition is true. JavaScript has two conditional 
// // statements/; if...else and switch.

// // We use the if statement to execute a statement if a logical condition is true. 
// // Use the optional else clause if the condition is false.

// if (condition) {
// statement_1;
// } else {
// statement_2;
// }

// // Here the condition can be any expression that evaluates to true or false. If 
// // the condition is true, statement_1 is executed, otherwise, statement_2 is 
// // executed. The statements can be any statement, even further nested if 
// // statements. 
// // You can compound the statements using else if to have multiple conditions 
// // tested in sequence.

// if (condition_1) {
//   statement_1;
// } else if (condition_2) {
//   statement_2;
// } else if (condition_n) {
//   statement_n;
// } else {
//   statement_last;
// } 

// // In the case of multiple conditions only the first logical condition which 
// // is true will be executed. To execute multiple statements, group them within 
// // a block statement({ . . . }). It is good practice to always use block 
// // statements , especially when using if statements.

// if (condition) {
//   statement_1_runs_if_condition_is_true;
//   statement_2_runs_if_condition_is_true;
// } else {
//   statement_3_runs_if_condition_is_false;
//   statement_4_runs_if_condition_is_false;
// }

// // Fasly values: the following values evaluate to false:
// // false
// // undefined
// // null
// // 0
// // NaN
// // the empty string (“”)
// // All other values, including all objects, evaluate to true when passed to a 
// // conditional statement.

// // Switch statements: A switch statement allows a program to evaluate an 
// // expression and attempt to match the expression’s value to a case label. 
// // If a match is found, the program executes the associated statement.

// // switch (expression) {
// //   case label_1:
// //     statements_1
// //     [break;]
// //   case label_2:
// //     statements_2
// //     [break;]
// //     ...
// //   default:
// //     statements_def
// //     [break;]
// // }

// // The program first looks for a case clause with a label matching the value 
// // of the expression and then transfers control to that clause, executing the 
// // associated statements. If no matching label is found, the program looks for 
// // the optional default clause, and if found, transfers control to that clause, 
// // executing associated statements. If no default is found, the program continues 
// // execution at the statement following the end of switch. By convention, the 
// // default clause is the last clause, but it doesn’t have to be. 
