let firstVariable = [];
let secondVariable = "";
let operator = "";
let final = 0;
const numberButtons = Array.from(document.getElementsByClassName("button"));
const operatorButtons = Array.from(document.getElementsByClassName("operator"));
const resultButton = document.getElementById("result");
const firstLine = document.getElementById("lineOne");
const secondLine = document.getElementById("lineTwo");
const clearButton = document.getElementById("clear");

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
        if (b != 0){
        return divide(a,b)
        } else {
            firstLine.textContent = "Division by zero error";
            secondLine.textContent = "Division by zero error";
        }
    }
}

function clear() {
    firstVariable.splice(0);
    secondVariable = "";
    firstLine.textContent = "";
    secondLine.textContent = "";
    operator = "";
}

numberButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        firstLine.textContent += event.target.textContent;
        secondVariable += event.target.textContent;
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        if (operator != "" && firstVariable[0] == final) {
            operator = "";
            operator += event.target.textContent;
            firstLine.textContent = `${firstVariable[0]}` + ` ` +event.target.textContent + ` `;
            secondLine.textContent = "";
        } else if (operator != "" && firstVariable[0] != final) {
            firstVariable.push(+secondVariable);
            final = Math.floor(operate(operator,firstVariable[0],firstVariable[1])*1000)/1000;
            firstLine.textContent += ` ` +event.target.textContent + ` `;
            secondLine.textContent = `${final}`;
            firstVariable[0] = +final;
            firstVariable.splice(1);
            secondVariable = "";
        } else {
        firstVariable.push(+secondVariable);
        secondVariable = "";
        operator += event.target.textContent;
        firstLine.textContent += ` ` +event.target.textContent + ` `;}
    })
})

resultButton.addEventListener("click", function() {
        firstVariable.push(+secondVariable);
        final = Math.floor(operate(operator,firstVariable[0],firstVariable[1])*1000)/1000;
        secondLine.textContent = `${final}`;
        firstVariable[0] = +final;
        firstVariable.splice(1);
        secondVariable = "";
    })

clearButton.addEventListener("click", clear);