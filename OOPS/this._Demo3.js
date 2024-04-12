let iphone = {
    name: "Iphone 13 pro",
    price:  100000,
    description: "The new apple iphone 13 pro",
    rating: 4.5,

    display: function()  {
        let iphoneRed = {
            name: "Iphone read",
            price:  110000,
            print: () => {
                console.log(this);// Inside an arrow function  bydefalut this actuly resolved lexicaly
            }
        }
        iphoneRed.print()
    }
}


iphone.display()
