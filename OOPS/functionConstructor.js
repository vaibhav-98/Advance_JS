function Product(n,p,d) {
    this.name = n;
    this.price = p;
    this.description = d;

    this.display = function() {
        console.log(this);
    }
}


const p = new Product("bad", 2500, "cool new bag")
p.display()



