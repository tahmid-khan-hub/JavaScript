console.log(7); // our first JS print


// *****************Basic data types**************** ->
// 1.numeric  2.string or char  3.boolean  4.null  5.undefined



// declare a variable
// keyword(space)name/type then equal then value
// like
var age = 18;

var number = 3;
var roll = 55;

// if we want to see the output-> then use
console.log(number);

// we use console.log to see our output



// what would happen it we change the value of variable like
number = 90;
// what would be the output?
console.log(number);
// the ans would be 90, you changed the value of this variable

// but if we defined our variables like 
var id;
//  what would be the output?
console.log(id);
//  ans is - undefined ******



// Now we will use/explore const keyword
// const - like constant (it is not changable after declaration)
const gari = "red car";
console.log(gari); // we know that output is red car
//  but if we do the following things

/*gari = "blue car";
console.log(gari); */

// Then it will throw us an error - the reason is simple we cant change const





// string
/* we can declare string with single cotation or double cotation*/
var country = "Bangladesh"
var name = 'Tahmid';

console.log(country)
console.log(name);

// boolean - true or false
var passed = false;
console.log(passed)

// If we want to know the types of the var then we will use ->
console.log(typeof name)
console.log(typeof gari);


// to write a long var name
var MyCurrAddress = "sylhet" // pascal case
var myCurrAddress = "sylhet" // camel case
var my_curr_address = "sylhet" // snake case




// special case
var total = 0.1+0.2;
console.log(total)
// in that case we will use toFixed
console.log(parseFloat(total.toFixed(2))) // but it will convert it to a string
// in that case, we will use parseInt or parseFloat




// convert number to string
var a = 20;
var b = 25;
var str = b.toString();
console.log(a+str)

// convert string to number
var c = 45;
var d = '24';
console.log(c+d);
// but
var e = parseInt(d);
console.log(c+e)