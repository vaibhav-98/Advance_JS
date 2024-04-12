class Product {
//  name; 
//  price;
//  description;

    constructor(n,p,d) {
        this.name = n;
        this.price = p;
        this.description = d;
       // return 10 ; // primitive → no effect
       //  return {x:10}
    }

}


const p = new  Product("bad",5000,"a cool bag"); // Product() this is class constructor 
// new keyword creates a brand new plane empty JS object
console.log(p);

