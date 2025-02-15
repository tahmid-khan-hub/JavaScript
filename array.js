// 1
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let newColors = [];

for(let i = colors.length - 1; i >= 0; i--){
    newColors.push([colors[i]]);
}
console.log(newColors);


// 2
const numbers = [12, 98, 5, 41, 23, 78, 46];
let even = [];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0) even.push(numbers[i]);
}
console.log(even);


// 3
var num = ['Tom', 'Tim', 'Tin', 'Tik'];
let str = '';
for(let i = 0; i < num.length; i++){
    str += num[i];
}
console.log(str);


// 4
const statement = 'I am a hard working person';
let arr = statement.split(' ');
let s = '';
for(let i = arr.length-1; i >= 0; i--){
    s = s + ' ' + arr[i];
}
console.log(s.trimStart());