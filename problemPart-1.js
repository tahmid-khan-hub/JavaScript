// c/5 = (f-32)/9
// 5f - 160 = 9c
// f = (9c + 160)/5;

const celcius = 98.6;
// console.log((9*celcius+160)/5);


const numbers = [5,6,11,12,98,5];
const find = 25;
let cnt = 0;
for(const i of numbers){
    if(numbers[i] == find) cnt++;
}
// console.log(cnt);



const str = 'caiocjcdwqkowucvrhtrgnocmasopeq';
let vowel = 0;
for(let i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') vowel++;
}
// console.log(vowel);




const s = 'I am learning Programming to become a programmer';

let ans = '', duplicate = '';

for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
        if (duplicate.length > ans.length) {
            ans = duplicate;
        }
        duplicate = '';
    } else {
        duplicate += s[i];
    }
}

// Check the last word
if (duplicate.length > ans.length) {
    ans = duplicate;
}

console.log(ans); // Output: "Programming"



const randomNumber = Math.round(Math.random() * 10) + 10;
console.log(randomNumber);
