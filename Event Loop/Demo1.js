let a = 10;
Promise.resolve().then(()=>console.log("Printing From promise"));
process.nextTick(() => console.log("printing from nextTick"))
setTimeout(() => console.log("printing from timer"),0)
console.log(a); 