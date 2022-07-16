function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, operator) {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            divide(num1, num2)
    }
}

let display = document.querySelector(".display")
let clear = document.querySelector(".clear")
clear.addEventListener('click', () => {
    display.textContent = ""
})