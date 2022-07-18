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
    if (num2 == 0) {

    }
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
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

let dec = document.querySelector(".dec")
dec.addEventListener('click', () => {
    let arr = display.textContent.split(" ")
    let current = ""
    if (arr.length == 3) {
        if (arr[2] == '') {
            return
        }

        current = arr[2]
    } else {
        current = display.textContent
    }

    if (current.includes(".")) {
        return
    } else {
        return display.textContent += "."
    }
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
            if (eval[2] == "") {
                let arr = display.textContent.split("")
                arr[arr.length - 2] = e.target.textContent
                return display.textContent = arr.join("")
            }

            let first = parseFloat(eval[0])
            let operator = eval[1]
            let second = parseFloat(eval[2])
            let result = operate(first, second, operator)
            return display.textContent = result + " " + e.target.textContent + " "
        }
        return display.textContent += " " + e.target.textContent + " " 
    })
})

let equal = document.querySelector("#equal")
equal.addEventListener('click', e => {
    let eval = display.textContent.split(" ")
    if (eval.length == 3) {
        if (eval[2] == "") {
            return
        }
        
        let first = parseFloat(eval[0])
        let operator = eval[1]
        let second = parseFloat(eval[2])
        let result = operate(first, second, operator)
        return display.textContent = result
    }
})

let del = document.querySelector(".del")
del.addEventListener('click', () => {
    let text = display.textContent
    if (text[text.length - 1] === "" || text[text.length - 1] === " ") {
        return
    }

    display.textContent = text.slice(0, -1)
})