function calculate(num1, operator, num2) {
    let result;
    switch(operator) {
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
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return 'Error: Division by zero';
            }
            break;
        default:
            return 'Error: Invalid operator';
    }
    return result;
}

const num1 = 10;
const num2 = 5;
const operator = '+';

console.log(`${num1} ${operator} ${num2} = ${calculate(num1, operator, num2)}`);
