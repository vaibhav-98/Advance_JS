
//===Alone , this refer to the  global obj===//

//console.log (this)


//=====In refer a function , this refer to the  global obj

/*
function sum () {
    var add = 5+5
    console.log (add)
    console.log (this)

}
sum ()

*/

//=============in a method , this refer to the  owner obj

const obj = {
    name  : "Raj" ,
    age : " 23" ,
    sum : function sum () {
        var add = 5+5
        console.log (add)
        console.log (this)
    
    }
}

obj.sum ()