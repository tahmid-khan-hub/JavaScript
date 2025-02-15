const str = 'Myself Tahmid, Im twentyone and I live sylhet. I studying at metropolitan';

let cnt = 0;
for(let i = 0; i < str.length; i++){
    if(str[i] === 'i' || str[i] === 'I') cnt++;
}
// console.log(cnt);

let vowel = 0;
for(let i = 0; i < str.length; i++){
    if(str[i] === 'a'||str[i] === 'e'||str[i] === 'i'||str[i] === 'o'||str[i] === 'u')
        vowel++;
}

// if(vowel >= 5) console.log('yes');
// else console.log('no');


const random = 'CXyxYHj';
let newStr = '';
for(let i = 0; i < random.length; i++){
    if(random[i] === 'X') newStr += 'Y';
    else if(random[i] === 'Y') newStr += 'X';
    else if(random[i] === 'x') newStr += 'y';
    else if(random[i] === 'y') newStr += 'x';
    else newStr += random[i];
}
// console.log(newStr);

let upper = str[0].toUpperCase();

for(let i = 1; i < str.length; i++){
    if(str[i-1] === ' ') upper += str[i].toUpperCase();
    else upper += str[i];
}
console.log(upper);
