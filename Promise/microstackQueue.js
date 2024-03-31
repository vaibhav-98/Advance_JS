/*
At any point of time , if event loop has a  choice to pick from microtask queue or callback queue (macrostask)
then it always gives priference to microtask queur

         microtask < macrosatsk
*/


function createPromise () {
    return new Promise ( function exec (resolve, reject) {
        console.log("Resolving the promise"); 

        resolve("done")
    })
}

setTimeout( function process() {
    console.log("Timer complete");
},0)

let p = createPromise()

p.then( function fullfillHandler(value){
     console.log("we fullfill 1 with value", value);
} , function rejectHandler(){})

p.then( function fullfillHandler(value){
    console.log("we fullfill 2 with value", value);
} , function rejectHandler(){})

p.then( function fullfillHandler(value){
    console.log("we fullfill 3 with value", value);
} , function rejectHandler(){})

for (let i =0 ; i< 10000000000; i++) {} // 

console.log("ending");