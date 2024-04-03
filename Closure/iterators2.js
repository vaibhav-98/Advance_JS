function fetchNextElement (array) {
   let idx = 0;
   function next() {
     if (idx == array.lenght){
        return undefined;
     }
     const nextElement = array[idx];
     idx++;
     return nextElement
   }
    return {next}
}


const automaticFetcher = fetchNextElement  ( [99,11,12,13,0,1,3,4])

console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());