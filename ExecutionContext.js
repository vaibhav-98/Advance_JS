var globalEC= "added"

function a() {

 var fa = "function o/p1" 
 console.log (fa )
  debugger ;
    b ();
   console.log ("abc")
 
}

function b () {

   debugger;

  console.log ("function o/p2")
   c() ;
}

function c()  {

 debugger
 console.log ("function o/p3")
 
}

debugger;
a ()