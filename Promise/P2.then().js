function getRandom(max) {
    return Math.floor(Math.random() * max)
}

function createPromisewithTimeout() {
    return new Promise ( function exce (resolve,reject) {
        console.log("Entering the executor callbaack in the promise constructor");
        setTimeout(function (){
             let num = getRandom(10);
        if(num %2==0) {
            // if the random number is even we fullfill
            resolve(num)
        }else{
            // if the random number is odd we reject
            reject(num)
        }
        },2000)
        console.log("Exitting the executor callback in the promise contructor");
       
    })
}

console.log("starting....");
const p = createPromisewithTimeout();
console.log("we are now  waiting for the promise to complete");
console.log("Currently my promise object is like .....", p);


console.log("Going to register my  1 set of  handler ");
p.then(
    function fullfillHandler(value) { 
        console.log("Inside fullfill 1 hander  with value", value);
        console.log("Promise after fulfilment ",p);
        setTimeout( function t() { console.log("Timer start 0ms ")},0)
        console.log("time exit in fullgillhander 0 ms ");
    },
     function rejectionHandler(value) { 
        console.log("Inside rejection 1 handler with value ", value);
        console.log("Promise affter  rectection", p);
        setTimeout( function t() { console.log("Timer start 0ms ")},0)
        console.log("time exit in rejectionHandler 0 ms ");
    }) ;



    console.log("Going to register my  2 set of handler ");
p.then(
    function fullfillHandler(value) { 
        console.log("Inside fullfill 2 hander with value", value);
        console.log("Promise after fulfilment ",p);
    },
     function rejectionHandler(value) { 
        console.log("Inside rejection 2 handler with value ", value);
        console.log("Promise affter  rectection", p);
    }) ;


console.log("Ending.......");

for (let i =0 ; i < 10000000; i++) {}

console.log("Loop ending........");







