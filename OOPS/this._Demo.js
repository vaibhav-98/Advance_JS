let iphone = {
    name: "Iphone 13 pro",
    price:  100000,
    description: "The new apple iphone 13 pro",
    rating: 4.5,

    display()  {
       console.log("frist display", this);
    }
}


let macbook = {
    name: "macbook M2",
    price:  150000,
    description: "The new apple macbook M2",
    rating: 4.9,

    display() {
       console.log("second display", this);
    }
}

iphone.display()


console.log(this);