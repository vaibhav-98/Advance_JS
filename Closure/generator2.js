function* fetchNextElement () {
    console.log("inside generator");
    const x =  10;
    yield 11;
    console.log("entering after a yield");
    const y = x + (yield 30);
    console.log("value  of y is ",y);
}


console.log("Start");
const iter  = fetchNextElement()
console.log("called generator");

console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next(17));







