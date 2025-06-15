document.addEventListener("DOMContentLoaded", function() {
    
    function add(number1, number2) {
        return number1 + number2;
    } 
    function subtract(number1, number2) {
        return number1 - number2;
    }
    function multiply(number1, number2) {
        return number1 * number2;
    }
    function divide(number1, number2) {
        if (number2 === 0) {
            return 'Error: Division by zero';
        }
        return number1 / number2;
    }
    function displayResult(resultValue) {
        const result = document.getElementById('calculation-result');
        result.textContent = resultValue;
    }
    function handleCalculation(operation) {
        const number1 = parseFloat(document.getElementById('number1').value.trim() || 0);
        const number2 = parseFloat(document.getElementById('number2').value.trim() || 0);

        switch (operation) {
        case 'add':
            const sum = add(number1, number2);
            console.log(`Adding ${number1} and ${number2}`);
            displayResult(sum);
            break;
        case 'subtract':
            const difference = subtract(number1, number2);
            displayResult(difference);
            break;
        case 'multiply':
            const product = multiply(number1, number2);
            displayResult(product);
            break;
        case 'divide':
            const quotient = divide(number1, number2);
            displayResult(quotient);
            break;
        default:
            displayResult('Invalid operation');
    }
    }
    document.getElementById('add').addEventListener('click', () => handleCalculation("add"));
    document.getElementById('subtract').addEventListener('click', () => handleCalculation("subtract"));
    document.getElementById('multiply').addEventListener('click', () => handleCalculation("multiply"));
    document.getElementById('divide').addEventListener('click', () => handleCalculation("divide"));
});