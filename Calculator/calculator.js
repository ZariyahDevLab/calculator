//Get refrences to HTML elements
const display = document.getElementById('display');

const buttons = document.querySelectorAll('.btn');


//Initialize Variables
let firstOperand = '';

let operator = '';

let secondOperand = '';


//Add event listeners to buttons
buttons.forEach(button => {

    button.addEventListener('click', handleButtonClick);

});


//Event listener for button clicks
function handleButtonClick(e) {
    const value = e.target.innerText;

    //Check if the clicked button is a number or operator
    if(!isNaN(value) || value === '.') {

        handleNumberClick(value);

    } else {

        handleOperatorClick(value);

    }
}

//Handle number button clicks
function handleNumberClick(value) {

    if (operator === '') {

        firstOperand += value;

    } else {

        secondOperand += value;

    }

    updateDisplay();

}

//Handle operator button clicks
function handleOperatorClick(value) {

    if(value === '=') {

        calculate();

    } else if (value === 'C') {

        clear();

        updateDisplay();

    } else {

        operator = value;

    }
}

//Perform the calculation
function calculate() {

    const num1 = parseFloat(firstOperand);

    const num2 = parseFloat(secondOperand);


    let result;

    switch (operator) {

        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            result = num1 / num2;
            break;
    }

    //Reset variables
    firstOperand = result.toString();

    operator = '';

    secondOperand = '';


    updateDisplay();
}

//Clear the calculator
function clear() {

    firstOperand = '';

    operator = '';

    secondOperand = '';


    updateDisplay();

}

//Update the display with the current value
function updateDisplay() {

    display.textContent = firstOperand + '' + operator + '' + secondOperand;

}


