console.log("hi");
console.lo("hey");
console.log("hello");



/*  

In this piece of code, there is no syntactical error.
When JavaScript reads the whole piece of code, there is an object called "console". Inside the object, there is a function called "log".

Now parsing is done, and console is already available in the global scope. No other formal declaration is there, everything works fine.

Then the Execution Phase comes:

 console.log("hi"); => Hi, global scope, do you have console? (Yes), then asked: Do you have a log function in console? (Yes), print it.
 console.lo("hey"); => Hi, global scope, do you have console? (Yes), then asked: Do you have a log function in console? (No), Error.
 console.log("hello");

*/