// this code work in browser 

function getRandom(max) {
    return Math.floor(Math.random() * max)
}

function createPromisewithTimeout() {
    return new Promise ( function exce (resolve,reject) {
        setTimeout(function (){
             let num = getRandom(10);
        if(num %2==0) {
            resolve(num)
        }else{
            reject(num)
        }
        },10000)

       
    })
}
y = createPromisewithTimeout()
console.log(y)