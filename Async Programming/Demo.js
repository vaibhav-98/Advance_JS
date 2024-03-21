function timeConsuminByLoop() {
    console.log("loop start");

    for (let index = 0; index < 10000000000; index++) {
        // same task
        
    }
    console.log("loop end");
}

function timeConsuminByRunTime() {
    console.log("start timer");
    setTimeout( function exec() {
        console.log("Complete the timer");
    } , 5000)
}

console.log("hii");

timeConsuminByLoop();
timeConsuminByRunTime()
timeConsuminByLoop();

console.log("byee");

