function timeConsuminByLoop() {
    console.log("loop start");
    for (let index = 0; index < 10000000000; index++) {
        // same task  
    }
    console.log("loop end");
}

function timeConsuminByRunTime0() {
    console.log("start timer 0");
    setTimeout( function exec0() {
        console.log("Complete the timer 0");
        for (let i = 0; i < 10000000000; i++) {
            // some task
        }
    } , 5000) // 5 sec 
}

function timeConsuminByRunTime1() {
    console.log("start timer 1");
    setTimeout( function exec1() {
        console.log("Complete the timer1");
    } , 0) // 0 sec timer
}

function timeConsuminByRunTime2() {
    console.log("start timer 2");
    setTimeout( function exec2() {
        console.log("Complete the timer 2");
    } , 200) // 2 ms
}

console.log("hii");

timeConsuminByLoop();
timeConsuminByRunTime0()
timeConsuminByRunTime1()
timeConsuminByRunTime2()
timeConsuminByLoop();

console.log("byee");

