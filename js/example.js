let table = 3;
let operator = 'addition';
let i = 1;
let message = '';

const addition = (number1, number2) => number1 + number2; 
const multiply = (number1, number2) => number1 * number2; 
const createMessage = (number1, number2, operation) => number1 + ' + ' + number2 + ' = ' + operation + '<br/>';

if(operator === 'addition'){
    while (i < 11){
        message += createMessage(i, table, addition(table, i));
        i++;
    }
} else {
    while (i < 11){
        message += createMessage(i, table, multiply(table, i));;
        i++;
    }
}

let el = document.getElementById('blackboard');
el.innerHTML = message;