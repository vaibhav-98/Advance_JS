var teacher = "Ashu"
function fun () {
    var teacher = "lilly"
    content = "JS"       // AutoGlobal 
    console.log(teacher);
}

function gun () {
    var student = "popy"
    console.log(student);
}

fun()
gun()
console.log(teacher);
console.log(content);

// autoglobal =>  when you call the function it references some variable. JavaScript doesn't know if this was meant to already exist or not, so it creates it in the global scope. As a result, it is still within scope and referenceable after the method is called.