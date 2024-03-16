let b = [1 ,2,3,4,50,47,55,1000,10,11,25,32,5,6]

let result = b.sort()
console.log(result); // 


// sort b increasing order 
let result2 = b.sort(function (a,b) {
    return a-b;
})

console.log(result2);






