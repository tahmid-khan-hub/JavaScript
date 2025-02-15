// intro to string
// some topics/deatures/operation of string are very much similar to array


// we can declare a string in three ways ->>>>
    /*
        1. (" ") 2. (' ') 3. (` `)
    */


// str-length ->
const capital = 'Dhaka'; // len - 5 but
const capital2 = 'Del hi'; // then len - 6, str also count space as length
// console.log(capital2.length);



// **************** str v/s arr ********************
// arr is immutable -> ex
const arr = [2,5,7,9,11];
arr[1] = 8;
// console.log(arr);


// str is mutable -> ex
let s = 'Mumbai';
s[1] = 'k';
// will the s[1] char replace by 'k'
// ans - NooooooooOO
// console.log(s);

// *********** str has upper and lower func, but arr does not



// upper and lower - > str
const school = 'RAJnagar IDEal high SchooL';
const college = 'BAf ShaHeen college ShamSherNagaR';

// here, scoll and college are not same - returns false    but
// if we use ->

// if(school.toLowerCase === college.toLowerCase) console.log('both are educational institute');
// else console.log('they are not same institute');
// you can also do it by using UpperCase**********



// *********we have an interesting concept     if
const a = 'Dhaka';
const b = '   Dhaka   '; // this two looks same , but they are not
// we have to remove the start and end space of 'b' string -> in that case

// if(a === b.trim()) console.log('yes');
// else console.log('no');
// ****************** Remainder --->>> trim is not goona work in middle space like (Dha Ka)**********




// **slice ->
// if we want some char from our string
const address = 'Majidpur';
// console.log(address.slice(1,5)); // it will return from i = 1 to i-1 means index 1 to index 4


// ***split ->
// like a substr  --->>>***** outout will shown in arr
const sentence = 'I am a good student and developer';
// console.log(sentence.split()); // outout will shown in arr
// console.log(sentence.split('')); // it will shown all char one by one in arr
// console.log(sentence.split(' ')); // shown all word in str and used comma****************
// console.log(sentence.split('a')); // it will divide str by 'a' - remove char 'a'




// you can also try splice****





// join ->
// we want to see our array and separate all word




// *** str concat ->
const first = 'Tahmid';
const last = 'Khan';

const name = first.concat(' ').concat(last);
// console.log(name);


// includes ->
// tp check whelther an element or char exist or not



// ***str reverse
// you can do rev in many way
// 1
let variable = '12345';
// console.log(variable.split('').reverse().join(''));

// 2
let reversed = 'I am doing my work';
let temp = '';
for(let i = reversed.length-1; i >= 0; i--){
    temp += reversed[i];
}
// console.log(temp);




