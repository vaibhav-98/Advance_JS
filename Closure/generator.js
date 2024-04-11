function* fetchNextElement() {
    console.log("I am inside the generator function");
    yield 1;
    yield 2;
    return 10;  
    console.log("Somewhere in middle");
    yield 3;
    yield 4;


}



const iter = fetchNextElement()


console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next());
console.log(iter.next());
console.log(iter.next());