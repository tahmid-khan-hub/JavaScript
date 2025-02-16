function fullName(first, last){
    if(typeof first !== 'string' || !isNaN(first)) return 'Enter a valid first name';
    if(typeof last !== 'string' || !isNaN(last)) return 'Enter a valid last name';
     return first+' '+last;
}

const first = 'fed', last = '4';
const name = fullName(first, last);
// console.log(name);


function sum(num1, num2){
    if(isNaN(num1) || typeof num1 !== 'number') return 'Enter a valid num1 number';
    if(isNaN(num2) || typeof num2 !== 'number') return 'Enter a valid num2 number';
    return num1 + num2;
}

const num1 = 5, num2 = 'seven';
const total = sum(num1, num2);
// console.log(total);