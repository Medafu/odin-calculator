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
display.textContent = "0"

let buttons = document.querySelectorAll(".num")
buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (display.textContent == "0") {
            return display.textContent = e.target.textContent
        }

        return display.textContent += e.target.textContent
    })
})

let clear = document.querySelector(".clear")
clear.addEventListener('click', () => {
    display.textContent = "0"
})

let operators = document.querySelectorAll(".op")
operators.forEach(e => {
    e.addEventListener('click', e => {
        let eval = display.textContent.split(" ")
        if (eval.length == 3) {
            let first = parseInt(eval[0])
            let operator = eval[1]
            let second = parseInt(eval[2])
            let result = operate(first, second, operator)
            return display.textContent = result + " " + e.target.textContent + " "
        }
        return display.textContent += " " + e.target.textContent + " " 
    })
})

let equal = document.querySelector("#equal")
equal.addEventListener('click', e => {
    
})