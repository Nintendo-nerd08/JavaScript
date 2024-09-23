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