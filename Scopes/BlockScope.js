// Blocks only scope let and const declarations, but not var declarations.

{
    var a =10
}

console.log(a);


{
    let b = 10
}

console.log(b);