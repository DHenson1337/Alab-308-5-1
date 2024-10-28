//returns the sum of an array of numbers
function arraySum(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {

        sum += Number(x[i]);
    }
    return sum;
}

// returns the average of an array of numbers
function arrayAverage(x) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < x.length; i++) {

        sum += (x[i]);
        count++
    }
    let average = sum / count;
    return average
}

//returns the longest string in an array
function arrayLongestString(x) {
    let bigString = ``;
    for (let i = 0; i < x.length; i++) {

        if (bigString.length < x[i].length) {
            bigString = x[i];
        }
    }
    return bigString
}

//returns strings larger than given number
function arrayStringsLongerThan(x, y) {
    let stringRuler = [];
    for (let i = 0; i < x.length; i++) {

        if (x[i].length > y) {
            stringRuler.push(x[i])
        }
    }
    return stringRuler
}

//returns numbers between 1 - 'n'
function countDownN(n) {
    if (n <= 0) {
        console.log(n);
        return;
    }
    console.log(n);
    countDownN(n - 1);
}

const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["Earth", "Wind", "Water", "Air", "Gravity", "Time", "Space", "Void", "Shadow-Wizard-Money-Gang"];

console.log("The sum of the number array is ", arraySum(numberArray));
console.log("The average of the Array is ",arrayAverage(numberArray));
console.log("The longest string in the array is ",arrayLongestString(stringArray));
console.log(arrayStringsLongerThan(stringArray, 4));
countDownN(5);

console.log(`===========================Question 2=====================================`);
/* Sort the array by age.
Filter the array to remove entries with an age greater than 50.
Map the array to change the “occupation” key to “job” and increment every age by 1.
Use the reduce method to calculate the sum of the ages.
Then use the result to calculate the average age. */

data = [
    { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
    { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
]

//Makes several adjustments to an Array
function arrayAdjustment(array, maxAge) {

    // Filter out ages over the specified maxAge (Part 2)
    let filteredArray = array.filter(function (person) {
        return person.age <= maxAge;
    });

    // Sort the filtered array by age (Part 1)
    filteredArray.sort(function (a, b) {
        return a.age - b.age;
    });

    //Change Occupation Key to Job and add +1 to all ages (Part 3)
    let updatedArray = filteredArray.map(function (person) {
        return {
            id: person.id,
            name: person.name,
            job: person.occupation,
            age: Number(person.age) + 1
        };
    });


    // Return the sorted and filtered array
    return updatedArray;
}


//New Array filited by arrayAdjustment Function
var dataSorted = arrayAdjustment(data, 50);
console.log(dataSorted);


// function to calculate sum of all the ages (Part 4)
function sumAges (array) {
    return array.reduce(function(accumulator, person){
        return accumulator + Number(person.age);
    }, 0); //Sets initial value to 0
}

let totalAge = sumAges(dataSorted);
console.log("The total age of this array is",totalAge);

//Part 5 average age
console.log("The average age is ", (totalAge/dataSorted.length));


console.log("=================Question 3=====================");
