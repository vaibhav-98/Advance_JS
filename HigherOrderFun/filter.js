/*

*filter Function
*filter is also a higher order function 
*filter also loops over the array element
*there is one special thing about filter , i.e ther argument function f which we have to pass inside
*filter should always  return a boolean , otherwise output will be  connverted to a boolen


*/



function addOrEven(x) {
    return (x%2 ==0)
}

let arr =[1,2,3,4,5,6,7,8,9]

const result = arr.filter(addOrEven)
console.log(result);


