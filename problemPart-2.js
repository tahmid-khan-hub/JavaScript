// 1
function getMin(heights2){
    let min = heights2[0];
    for(const i of heights2){
        if(min > i) min = i;
    }
    return min;
}

const heights2 = [167, 190, 120, 165, 137];
const minimum = getMin(heights2);
// console.log('min value is: ', minimum);


// 2
function getSmallName(name){
    let len = name[0].length;
    let str = name[0];

    for(let i = 1; i < name.length; i++){
        if(len < name[i].length){
            len = name[i].length;
            str = '';
            str += name[i];
        }
    }
    return str;
}

const name = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const smallestName = getSmallName(name);
// console.log(smallestName);


// 3
function calculation(laptopQuantity, tabletQuantity, mobileQuantity){
    return laptop*laptopQuantity + tablet*tabletQuantity + mobile*mobileQuantity;
}

const laptop = 35000;
const tablet = 15000;
const mobile = 20000;

const totalMoney = calculation(1, 2, 4);
// console.log('Total money is: ', totalMoney);


// 4
function findAveragePhonePrice(phones){
    let sum = 0;
    for(const i of phones){
        sum += i.price;
    }
    return sum / phones.length;
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
const avgPrice = findAveragePhonePrice(phones);
// console.log('average price of phones is: ', avgPrice);


// 5
function calculateSalary(employees){
    let sum = 0;
    for(const i of employees){
        sum += (i.experience * i.increment) + i.starting;
    }
    return sum;
}

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
const totalSalary = calculateSalary(employees);
// console.log('The total salary has to be provided by the company in a month is ->', totalSalary);