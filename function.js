function multiply(a, b, c, d){
    return a*b*c*d;
}

const a = 2, b = 2, c = 3, d = 4;
const result = multiply(a,b,c,d);
// console.log(result);


function checkOddEven(n){
    if(n % 2 == 1) {
        n *= 2;
        return n;
    }else if(n % 2 == 0){
        n /= 2;
        return n;
    }
}

const n = 8;
const res = checkOddEven(n);
// console.log(res);


function make_avg(arr, len){
    for(let i = 0; i < len; i++){
        // console.log(arr[i]/len);
    }
}

const arr = [12,3,6,9,5,22,77];
const len = arr.length;
make_avg(arr, len);



function countZero(str, zero){
    for(let i = 0; i < str.length; i++){
        if(str[i] == '0') zero++;
    }
    return zero;
}

const str = '0001110101011110101';
let zero = 0;
const cnt = countZero(str, zero);
// console.log(cnt);



function odd_even(number){
    if(number % 2 == 0) return 'even';
    else return 'odd';
}

const number = 7;
// console.log(odd_even(number));
