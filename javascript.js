let firstVariable = [];
let secondVariable = "";
let result;
let operator = "";
const numberButtons = Array.from(document.getElementsByClassName("button"));
const operatorButtons = Array.from(document.getElementsByClassName("operator"));
const resultButton = document.getElementById("result");
const firstLine = document.getElementById("lineOne");
const secondLine = document.getElementById("lineTwo");

function add(a,b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator,a,b) {
    if (operator == "+") {
        result = add(a,b);
    } else if (operator == "-") {
        result = substract(a,b);
    } else if (operator == "*") {
        result = multiply(a,b);
    } else if (operator == "/") {
        result = divide(a,b)
    }
    console.log(result);
}

numberButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        firstLine.textContent += +event.target.textContent;
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        firstVariable.push(firstLine.textContent);
        operator += event.target.textContent;
        firstLine.textContent += ` ` +event.target.textContent;
    })
})

resultButton.addEventListener("click", function() {
    
})