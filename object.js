// when we want to store multiple data in a storage
// ex - a human -> human has eye,mouth,skin-tone,body parts,hair-color etc....

// property/key : value******

// ************** non-primitive*********************

const bottle = {
    brand:'AquaFina',
    price:20,
    isClean:'true',
    height:45
}

const subject = {
    name: 'Biology',
    teacher: 'Rakesh Sir',
    chapters: ['one','two','three'],
    'fav chapters': ['1','2','7'], // if our property has space
    exams:{
        name:'Final',
        mark:100
    }
}
console.log(subject);

// if we want to access a single data
// we can use . 
console.log(subject.teacher);

//  but if we got very complicated property name like space ->
// we can use []
console.log(subject['fav chapters']);


// **** if we want to change our property value ->
bottle.price = 25;
subject['fav chapters'] = ['5','6','9'];

console.log(bottle);

console.log(subject);

// also
const propName = 'brand';
bottle[propName] = 'Pran';
console.log(bottle)

