let table = 3;
let operator = 'addition';
let i = 1;
let message = '';

const addition = (number1, number2) => number1 + number2; 
const multiply = (number1, number2) => number1 * number2; 

if(operator === 'addition'){
    while (i < 11){
        message += i + ' + ' + table + ' = ' + addition(table, i) + '<br/>';
        i++;
    }
} else {
    while (i < 11){
        message += i + ' * ' + table + ' = ' + multiply(table, i) + '<br/>';
        i++;
    }
}

let el = document.getElementById('blackboard');
el.innerHTML = message;