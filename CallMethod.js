const a =  {

    car : " safari",
    brnad : "Tata" ,
    feature : function (rating) {
        console.log (`very fast ${this.car} car brand is ${this.brnad} . I will give you ${rating} rating`)
    }

} 

//a.feature (5)

const b = {

    car : "Scarpio" ,
    brand  : "Mahindra",
}

a.feature .call( b , 5  )