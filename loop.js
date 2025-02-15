// 1
// for(let i = 1; i <= 60; i++){
//     console.log("I will invest at least 6 hrs every single day for next 60 days!");
// }

// 2
let oddSum = 0;
for(let i = 91; i <= 129; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

let n = 9;
for(let i = 1; i <= 10; i++){
    console.log(n*i);
}

for(let i = 1; i <= 200; i++){
    console.log(i);
    if(i == 100) break;
}

for(let i = 1; i <= 100; i++){
    if((i*i)%i){
        continue;
    }
    console.log(i*i);
}