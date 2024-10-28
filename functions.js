// functions.js
// ***** Variable Declarations
let name = "Gregory";

// this will work because of hoisting 
//      only because sayHello was defined using a function declaration
// sayHello('anonymous');

// function expressions are not hoisted, so they MUST be defined
// earlier in the code than where you want to execute them
// ***** This will give us an error
// sayHello2('Amber');

// ***** Function Definitions

// ==========   Three ways to define a function     ==========
// *****    1. Function Declaration
//          starts with the keyword _function_
//          parameters and arguments...
//          name is a parameter that I am passing in
function sayHello(name) {
    console.log('Hi,', name + "! Good Morning!");
}

// *****    2. Function Expression
//          starts with const, name the function and set it = function () {}
const sayHello2 = function(name) {
    console.log(`Hello! ${name}`);
}

// ***** The biggest practical difference between these two is
//      function declarations can be __hoisted__ which means that they CAN be invoked before their definition
//      function expressions must be defined earlier in the code than where you invoke them

// *****    3. Arrow Functions
//      in this example, I have two parameters, so I have two things that I will pass in
//      a and b are parameters
//      (parameters) => { code block that executes }
const add = (a, b) => {
    return a + b;
}

// *****    Exercise
function areBothEven(n1, n2) {
    return !(n1 % 2) && !(n2 % 2);
}

function areBothEvenAlt(n1, n2) {
    let isN1Even, isN2Even;
    if (n1 % 2 === 0) {
        isN1Even = true;
    } else {
        isN1Even = false;
    }
    // using less code
    // n2 % 2 is 0 when n2 is even, but that looks like false
    // n2 % 2 is 1 when n2 is odd, but that looks like true
    // i want those values flipped
    isN2Even = !(n2 % 2);
    return isN1Even && isN2Even;
}

// I would normally call this lower, but to keep the answer with the exercise...
// console.log(areBothEven(3, 4));
// console.log(areBothEven(2, 4));
// console.log(areBothEven(-4, 4));
// console.log(areBothEven(3, 5));
// console.log(areBothEvenAlt(3, 4));
// console.log(areBothEvenAlt(2, 4));
// console.log(areBothEvenAlt(-4, 4));
// console.log(areBothEvenAlt(3, 5));

// ***** Practice Activity 1: write a Function Declaration
function computeArea(width, height) {
    let area = width * height;
    return (`The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units`);
}
// console.log(computeArea(3, 4));

// ***** Practice Activity 2: write a Function Expression
const planetHasWater = function (planet) {
    planet = planet.toLowerCase();
    if (planet === 'earth' || planet === 'mars') {
        return true;
    } else {
        return false;
    }
    // an alternative
    // return (planet === 'earth' || planet === 'mars);
}
// console.log(planetHasWater('mArS'));
console.log("===================================");
// arguments get matched to parameters by the order that they are passed in
// if name is my only parameter, then the first argument needs to be the name 
const getDevObject = function (name) {
    // there is a way to use the arguments "hidden" variable
    // before we use it, we're going to see what it looks like
    // console.log(name, 'in the function');
    // parameters can be named whatever I want
    // arguments is a built-in functionality, so I need to use that name exactly
    // console.log(arguments);
    // i need to use square bracket notation to access each individual element
    // console.log(arguments[1]);
    // what I really want is an object
    // {    devName: ____
    //      jobSkills: []   }

    // using the arguments variable, I can access the rest of the things that were passed in
    // and I don't have to define a parameter for them
    let skills = [];
    for (let i=1; i<arguments.length;i++) {
        skills.push(arguments[i]);
        // console.log(skills);
    }

    // you can create a new object variable and return that
    // but you can also just return the object
    return {
        devName: name,
        jobSkills: skills
    };
}

let maria = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jquery');
console.log(maria);


// ***** main code that you are executing

// calling the function 
// using the () invokes the function, it means execute the code in the function definition
// sayHello("Davon");
// sayHello2('Christopher');
// sayHello2('Amber');

// This will not run that function, it will refer the block of code
// sayHello;
// console.log(sayHello);

// calling a function with two parameters and a return value
//      I have created a variable called sum to catch the return value of sum 
//      I need to pass in two ARGUMENTS
let sum = add(3, 4);
// console.log(sum);

// arguments are the things that I pass in when I invoke the function
// invoking the function is what makes it run
sum = add(2, 10);
// console.log(sum);

// shorthand for above, if you don't need to save the value
// console.log(add(1, 2));

function setColor(bicycle, color) {
    //set color to 'purple' if not provided
    bicycle.color = color || `purple`;
}

const myBike = {color: 'red'};
// console.log(myBike);

// ============The new way=========================
function setColor2 (bicycle, color="purple"){
    bicycle.color = color;
}
console.log("===========================");

// ======================= Functions as Arguments ====================
// ****** EXAMPLE - forEach
// general syntax is
// array_name.forEach(callback_function)

// in this case, I define the function as im passing it in
const colors = [`red`, `green`, `blue`]
colors.forEach(function(color) {
    console.log(color);
})

// i could define the function, and then pass it in.
function printColor(color) {
    console.log(color);
}

colors.forEach(printColor)

//you can use
// colors.forEach((color) => {
//     colors.forEach(color);
//     })

//array.forEach(function) == for(i -0, i < array.length; i++)


// ============================ Nesting functions ================================
function multiply(num1, num2){
    return num1*num2;
}

function power(num, exp){
    let ans = 1;
    if (exp < 0){
        return "I can't do that"
    }
    else if (exp === 0) {
        return 1;
    }
    else {
        for (let i=1; i<=exp; i++){
            ans = multiply(ans, num);
            console.log(`ans is ${ans} on the ${i} iteration` );
            
        }
        return ans;
    }
}

console.log(power(3,2));
console.log(power(2,4));

//recursion and recursive functions
//functions that call themselves


// recursion and recursive functions
// functions that call themselves
// YOU NEED TO HAVE AN EXIT CONDITION/CASE
let turnCount = 5;
let gameOver = false;
function takeTurn() {
    turnCount--;    
    console.log('it is my turn');
    console.log('i did the things on my turn')
    if (turnCount < 1) gameOver=true;
    if (!gameOver) {
        takeTurn();
    }
    
}
takeTurn();

let valVar =5;
function passBy(valVar) {
    myVar = myVar*10;
    return myVar
}

console.log(valVar);

//
