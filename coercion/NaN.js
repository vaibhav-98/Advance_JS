console.log(Number("123"));
console.log(Number("abcd"));
console.log(Number("0xa"));

let x = NaN

//console.log(x === NaN);

console.log(isNaN(x));

console.log(isNaN("Vaibhav")); // isNaN convert the incoming input to a number  

console.log(Number.isNaN("vaibhav"));

console.log(Number.isNaN(x));