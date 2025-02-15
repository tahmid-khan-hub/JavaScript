const today = new Date();
console.log(today);
const date = new Date('2044-10-19');
console.log(date.getMonth());
console.log(date.getDay());

const specificDay = new Date(2091, 0, 21);
console.log(specificDay);
specificDay.setMonth(9);
specificDay.setDate(14);

console.log(specificDay);

// if we want date/month/year then->
console.log(specificDay.toLocaleString('en-GB'));

