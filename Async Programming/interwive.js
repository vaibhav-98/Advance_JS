console.log("start");
for(let i =0; i < 3 ; i++) {    // i = 0 , i =1 , i =2 ;
    setTimeout( function exec() {
        console.log("Time done");
    } ,1000)
}

for(let i=0; i< 10000000000; i++) {

}

console.log("End");