//=====================
/*

let a = function () {

    console.log (" hello , vaibhav tripathi ")
}
a()
*/

//===========================

// let b= {

//     name : "vaibhav tripathi ",
//     qalif : function () {
//         console.log ("I graduated from FGIPS")
//     }
// }

// b.qalif()



//============================fuction pass as argument

// const myName = () => {
//     return "Hello "
// }

// const a = (sayhi,name ) => { 
//     console.log(sayhi() + " " + name)
// }

// a (myName,"vaibhav tripathi")

// this alos know as call back function 



//=============================returnig function========


function a() {
    return function b () {
        console.log ("  hello tripathi  ji")
    }
}
// a()()
let res = a()
res ()