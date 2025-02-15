const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
}

const ans = colors["golden rod"];
// console.log(ans);


const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
}
car.passengerCapacity = 4;
// console.log(car);


const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
}
// console.log(student.physics.marks);


let person = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let cnt = 0;
for(let i in person){
    cnt++;
}
// console.log(cnt);


const boy = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
for(let i in boy){
    // console.log('key: '+ i + ' | ' + 'type:  ' + typeof boy[i]);
}