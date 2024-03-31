function fetchData(url) {
    return new Promise ( function exec(resolve,reject) {
        console.log("Started downloadin from " ,  url);
        setTimeout( function processDownloading() {
            let data = "Dummy Data"
            console.log("Download completed");
            resolve(data)
        },7000)
    })
}

console.log("Start");
 
let promiseObj = fetchData("xyz.com")

promiseObj.then( function A(value){
    console.log("value is ", value);
})

console.log("end");
