// this code work in browser 

function getRandom(max) {
    return Math.floor(Math.random() * max)
}


function createPromise() {
    return new Promise ( function exce (resolve,reject) {
        for (let i =0; i<10000000000; i++) {}

        let num = getRandom(10);
        if(num %2==0) {
            resolve(num)
        }else{
            reject(num)
        }
    })
}
x = createPromise()