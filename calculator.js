function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}


function calculator(a, b, operation){

    if(operation === 'add') return add(a, b);
    
    else if(operation === 'subtract') return subtract(a, b);

    else if(operation === 'multiply') return multiply(a, b);

    else if(operation === 'divide') return divide(a, b);

    else return 'not a valid operation';

}

const a = 7, b = 12 , operation = 'subtract';
console.log(calculator(a, b, operation));
