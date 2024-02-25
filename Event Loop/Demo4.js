const fs = require('fs')

fs.readFile('./readme.md', 'utf8',(err,data) => {  // I/O queue -- callback queue
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
} );

process.nextTick(() => console.log("nexTick"))
Promise.resolve(() => console.log("Promise 1"))
setTimeout(() => console.log("Timer 1"))
setImmediate(() => console.log("Immediate callback"))

for(let i = 0 ; i < 10000000000 ; i++) {}
