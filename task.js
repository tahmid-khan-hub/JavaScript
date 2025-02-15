// 1
let burger = 600;
let coke = 30;

if(burger > 500){
    console.log('free coke');
}
else{
    console.log(coke);
}


// 2
let weight = 65;
let height = 1.65;

let BMI = weight / (height*height);

if(BMI < 18.5){
    console.log('you are underweight.');
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log('you are normal.');
}
else if(BMI >=25 && BMI <= 29.9){
    console.log('you are overweight.');
}
else {
    console.log('yor are obese');
}


// 3
let mark = 75;

if(mark >= 90 && mark <= 100) console.log('A');
if(mark >= 80 && mark <= 89) console.log('B');
if(mark >= 70 && mark <= 79) console.log('C');
if(mark >= 60 && mark <= 69) console.log('D');
if(mark >= 0 && mark <= 59) console.log('F');



// 4
let num1 = 7;
let num2 = 5;

let result;

// if(num1 > num2) result = num1*2;
// else result = num1 + num2;

result = num1 > num2 ? result = num1 * 2 : result = num1 + num2;

console.log(result);



// 5
let age = 17;
let ticket = 800;

if(age < 10) console.log('free');
else if(age > 10 && age < 22) {
    let discount = ticket * 50/100;
    console.log(ticket - discount);
}
else if(age >= 60){
    let discount = ticket * 15/100;
    console.log(ticket - discount);
}
else console.log(ticket);