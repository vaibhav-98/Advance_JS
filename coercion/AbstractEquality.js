console.log(null == undefined);
console.log(10 == "10");

console.log( false == "0");
/*
    x --> boolean --> ToNumber --> false --> 0
    x = 0 , y = "0" ,  x == y
    y --> ToNumber --> 0
    0 == 0 --> true
*/

console.log(NaN == "NaN");

let obj = {x:10, valueOf(){return 100}}

console.log( 99 == obj);
console.log(100 == obj);