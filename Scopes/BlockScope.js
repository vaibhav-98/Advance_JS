// Blocks only scope let and const declarations, but not var declarations.

{
    var a =10
}

console.log(a);


{
    let b = 10
}

console.log(b);

/* 

* Block scope refers to the visibility or accessibility of variables within a block of code.
* A block of code is delimited by curly braces {}. Common blocks include those in if statements, loops, and functions.
* Variables declared with let and const keywords have block scope. They are only accessible within the block they are declared in, as well as any nested blocks.
* Variables declared with var keyword used to have function scope but since ES6 (ECMAScript 2015), they also have block scope if they are declared inside a block.
 


Ex- {
    let blockScopedVariable = 10;
    const anotherBlockScopedVariable = 20;
    var variableWithBlockScope = 30; // With var, this variable has function scope
}
*/