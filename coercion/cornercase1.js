//ToString → "" + value
console.log("" + 0);
console.log("" + (-0));

console.log("" + [] );
console.log("" + {});


console.log("" + [1,2,3]);

console.log("" + [null,undefined]);

console.log("" + [1,2,null,4]);

console.log("" + [1,2,undefined,5]);

//ToNumber

console.log(0 - "010"); // decimal number
console.log(0 - "O10");

//console.log(0 - 010); // octal number

console.log(0 - "0xb"); // hexadecimal number
console.log(0 - 0xb);

console.log([] - 1);
console.log([""] - 1);
console.log(["0"] - 1);
