let firstVariable = [];
let secondVariable = "";
let result;
let operator = "";
let final;
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
        return add(a,b);
    } else if (operator == "-") {
        return substract(a,b);
    } else if (operator == "*") {
        return multiply(a,b);
    } else if (operator == "/") {
        return divide(a,b)
    }
    console.log(result);
}

numberButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        firstLine.textContent += +event.target.textContent;
        secondVariable += event.target.textContent;
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        firstVariable.push(+secondVariable);
        secondVariable = "";
        operator += event.target.textContent;
        firstLine.textContent += ` ` +event.target.textContent;
    })
})

resultButton.addEventListener("click", function() {
    firstVariable.push(+secondVariable);
    final = operate(operator,firstVariable[0],firstVariable[1]);
    secondLine.textContent = `${final}`;
})