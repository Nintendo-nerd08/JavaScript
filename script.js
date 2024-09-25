let message = "hello World";

let x = document.getElementById("print");

console.log(x.innerHTML);

x.innerHTML = message;

function printMessage(){
    document.getElementById("print")

}

function display(){
    let element = document.getElementById("print")

    element.style.display = "block"
    element.style.color ="red"
}

let a = true;
let b = false;
console.log("A is " + a);
console.log("B is " + b);

console.log("Not A is " + !a);
console.log("Not B is " + !b);

console.log("A and B is " + a && b);
console.log("A or B is " + (a || b)); // (|| <--- symbol for or.)


function test(x) {
    let element = document.getElementById("result");
    x = +x;

    if(x === 1){ //relates two things combines them and gives you a result.
        element.innerHTML = "You clicked Button 1"
    } else{
        element.innerHTML = "You clicked Button 2"
    }

}