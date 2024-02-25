console.log("start");

setTimeout(() => console.log("Timer 1"),0) // cb will be waiting in timer queue

Promise.resolve(() => console.log("Promise 1")) // cb willl be waiting in promise queue

process.nextTick(() => console.log("nextTick 1")) // cb will be waiting in nextTick queue


setTimeout(() => console.log("Timer 2"),0) // cb will be waiting in timer queue

process.nextTick(() => console.log("nextTick 1")) // cb will be waiting in nextTick queue

for(let i = 0 ; i < 10000000000; i++) {}  // by the timer this loop completes all the callbacks are in their 

console.log("end");  


