function fruitsIterator (values) {
    let nextIndex = 0;
    return {
        next: function () {
            if(nextIndex < values.lenght) {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}




const myArray = ["Apple", "Banna", "Orange", "pomogranet"]
console.log("My array is ", myArray);

const fruits = fruitsIterator(myArray)

console.log(fruits.next());
console.log(fruits.next());
