//============normal ============//

const funA = () => {

    setTimeout (function () {

        console.log ("welcome funA") 
       // funB ()
    } ,3000)
} 

const funB = () => {
    console.log ("welcome funB") 
}

funA() 
funB ()


// ================Callback function =================//

const perOne = ( friend ,  callfrnd )=> {
    console.log(`I am busy right now . I am talking to ${friend}.I will call you back`)

     callfrnd ();
     
}

const perTwo = () => {
    console.log (` Hey what's up . I call  back you na `)
}

perOne ("Anujar",perTwo) 
perTwo()



// var  b = function (par, callback ) {
//     console .log(`hello ${par}`)
//     callback ()
// }

// function c () {

//     console.log ("tripathi")
// }

// b("vaibhav",c ) 




