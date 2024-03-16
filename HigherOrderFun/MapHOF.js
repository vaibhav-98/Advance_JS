/*
arrays are also custom objects in JS
index of the element is the key and the element is self is the value
["abc", "def" , "ghi"] → {0: "abc" , 1: "def" , 2: "ghi"}
*/



/*
*map function 
*map is HOF available with arrays
*it takes a function  as an argument → f
*it returens an array in which every value is actually populated by  calling
*function f with original array element as argument
*/

function square(el) {
    return el*el
}

function cuibe(x){
    return x*x*x
}

const arr = [1,2,3,4,5] // original array

const result =  arr.map(square)
console.log(result);


const cuiberes = arr.map(cuibe)
console.log(cuiberes);

/*
 *if the function that we are passing in map takes  two arguments
 *then first argument will be accessing the actual  valur
 *second argument will be accessing index of the value
*/
function print (element, idx) {
    return `Element at index ${idx} is ${element}`
}

const result2 = arr.map(print) 
console.log(result2);



function customMapper (arr, func) {
    let result  = [];
    for ( let i = 0  ; i < arr.length; i++) {
        result.push(func(arr[i],i))
    }

    return result
}

const  value = customMapper(arr, print)
console.log(value);



