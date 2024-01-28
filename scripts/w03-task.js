/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers() {
    let num1 = parseInt(document.querySelector("#add1").value);
    let num2 = parseInt(document.querySelector("#add2").value);
    document.getElementById(sum).value = add(num1, num2);
}

document.getElementById("addNumbers").addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
let subtract = funtion(number3, number4)
{
    return number3 - number4;
}

let subtractNumbers = function()
{
    let num3 = parseInt(document.querySelector("#subtract1").value);
    let num4 = parseInt(document.querySelector("#subtract2").value);
    document.getElementById("difference").value = subtract(num3, num4);  
}
/* Arrow Function - Multiply Numbers */
multiply = (number5, number6) => number5 * number6;
multiplyNumbers = () => {
    let num5 = Number(document.querySelector("#factor1").value);
    let num6 = Number(document.querySelector("#factor2").value);
    document.getElementById("product").value = multiply(num5, num6);
}
document.getElementById("multiplyNumbers").addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number7, number8) {
    return number7 / number8;
}

function divideNumbers() {
    let num7 = parseInt(document.querySelector("#dividend").value);
    let num8 = parseInt(document.querySelector("#divisor").value);
    document.getElementById("quotient").value = divide(num7, num8);
}
document.getElementById("divideNumbers").addEventListener('click', divideNumbers);


/* Decision Structure */
function getTotal()
{
   let userInput = prompt("what is your due total") 

}
document.querySelector("#getToal").addEventListener('click',numberTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, ];
// Step 2: Assi[gn the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").innerHTML = array_1;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.getElementById("odds").innerHTML = array_1.filter(oddNumbers);

function oddNumbers(number) {
    return number % 2 != 0;
}
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.getElementById("evens").innerHTML = array_1.filter(evenNumbers);

function evenNumbers(number) {
    return number % 2 === 0;
}
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.getElementById("sumOfArray").innerHTML = array_1.reduce(sumArray);

function sumArray(total, num) {
    return total + num;
}

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let new_array = document.getElementById("multiplied").innerHTML = array_1.map(mapArray);

function mapArray(mapNumber) {
    return mapNumber * 2;
}
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.getElementById("sumOfMultiplied").innerHTML = new_array.reduce(newSumArray);

function newSumArray(newTotal, newNum) {
    return newTotal + newNum;
}