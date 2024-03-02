
 function fun () {
    console.log(a)
    var a = 10
}
fun()
console.log(a);



function fun2 () {
    console.log(b);
    let b =20
}
fun2()

console.log(b);

/*

1.Function scope refers to the visibility or accessibility of variables within a function.
2.Variables declared with var keyword have function scope. They are accessible anywhere within the function they are declared in, but not outside of it.
3.Variables declared with let and const keywords do not have function scope. They have block scope, as explained above.

*/