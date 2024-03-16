/**
 * reduce is HOF available for arrays
 * reduce also take a function f as an argument
 * what reduce does is , it one by one goes  every element of the array
 * say the current element is arr[i]
 * reduce will pass this element to the function f, and  accumulate thee result og futher function calls 
 * with this particular result 
 * 
 * 
 */



const arr = [1,2,3,4,5,6];

function sum(prevResult, currValue) {

    return  prevResult + currValue
}

const result = arr.reduce(sum)
console.log(result);
