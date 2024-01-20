// Creating an object 'obj' with a custom 'toString' method
let obj = {
    toString() {
        // This 'toString' method overrides the default behavior
        // and returns the number 10 instead of the default '[object Object]'
        return 10;
    }
};
console.log(typeof obj.toString());

//************************************************************************************************************************//

// Creating another object 'obj1' with a custom 'valueOf' method
let obj1 = {
    x: 10, // Property 'x' with value 10
    valueOf() {
        // by defaailt return same object
        // This 'valueOf' method is designed to return the number 10
        return 10;
    }
};
console.log(obj1.valueOf());

// *********************************************************** ToPrimitive with ToNumber ==========================================//

let obj3 = {} 

console.log( 10 - obj3); // obj.valueOf --> object , obje.toString --> [object Object]

//The console.log(10 - obj); statement triggers the subtraction operation, and JavaScript attempts to convert obj into a primitive value. Since obj doesn't have a custom valueOf method, JavaScript then looks for the toString method.

//The default toString method for objects returns [object Object]. Therefore, the expression 10 - obj is equivalent to 10 - "[object Object]". JavaScript converts the string [object Object] to a number in the subtraction context, resulting in NaN (Not a Number).
