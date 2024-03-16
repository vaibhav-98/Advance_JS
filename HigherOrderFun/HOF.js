// jigher order fun - there are function which take another function as  arguments
// these are called  higher  order function


function f(x,fn) {
    /*
      x- number
      fn - functiom
    */
   console.log(x);
   console.log(fn);
   fn()
}

f(10, function exec () {
    console.log("I am an expression passed to a HOF");
})