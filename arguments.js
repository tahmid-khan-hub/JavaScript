function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments); // if the func can take limited parameters and
    // we want to see / work with all arguments then we will use  ->   arguments
    console.log(arguments[4]);
}
add(12, 13, 34, 66, 121, 90);