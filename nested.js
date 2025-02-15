const laptop = {
    name: 'hp',
    processor: 'intel',
    storage: '512GB',
    price: 52000,
    color: 'white'
}

// if we want to see all the names of properties ->
const keys = Object.keys(laptop);
// console.log(keys);

// for values ->
const values = Object.values(laptop);
// console.log(values);



// *** if we want to delete a property***
// delete laptop['processor'];

// console.log(laptop);



const school = {
    name:'RIHS',
    students:800,
    function: ['boi mela', 'noboborsho', 'bijoy dibosh'],
    speciality:{
        isGarden: true,
        teachers:{
            male:23, 
            female: 12,
            'Head master':'Nazrul Haque Chowdhury'
        }
    }
}

// console.log(school.speciality.teachers['Head master']);
// console.log(school.speciality.teachers.female);

school.speciality.teachers['Head master'] = 'Mominul Islam';
// console.log(school.speciality.teachers['Head master']);

school.function[1] = 'eid';
// console.log(school.function);




