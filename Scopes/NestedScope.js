function fun () {
    var x = 10; 

    function gun() {
        var y = 20 ;
        console.log(x); // 10
        console.log(y); // 20
    }

    gun ()
    console.log(x); // 10
    console.log(y); // error
} 

fun ()