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
        },10000)
        console.log("Exitting the executor callback in the promise contructor");
       
    })
}

console.log("starting....");
const p = createPromisewithTimeout();
console.log("we are now  waiting for the promise to complete");
console.log("Currently my promise object is like .....", p);


console.log("Going to register my  1st handler ");
p.then(
    function fullfillHandler(value) { 
        console.log("Inside fullfill hander with value", value);
        console.log("Promise after fulfilment ",p);
    },
     function rejectionHandler(value) { 
        console.log("Inside rejection handler with value ", value);
        console.log("Promise affter  rectection", p);
    }) ;



    console.log("Going to register my  1st handler ");
p.then(
    function fullfillHandler(value) { 
        console.log("Inside fullfill hander with value", value);
        console.log("Promise after fulfilment ",p);
    },
     function rejectionHandler(value) { 
        console.log("Inside rejection handler with value ", value);
        console.log("Promise affter  rectection", p);
    }) ;










