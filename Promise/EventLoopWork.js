

function createPromise () {
    return new Promise ( function exec (resolve, reject) {
        setTimeout ( function process() {
            console.log("Resolving the promise"); 
            reject("done")
        },1000)
        
    })
}



let p = createPromise()

p.then( function fullfillHandler(value){
     console.log("we fullfill 1 with value", value);
} , function rejectHandler(value){
    console.log("we rejectio Handler 1 with value", value);
})

p.then( function fullfillHandler(value){
    console.log("we fullfill 2 with value", value);
} , function rejectHandler(value){
    console.log("we rejectio Handler 2 with value", value);
})


for (let i =0 ; i< 10000000000; i++) {} // 

console.log("ending");