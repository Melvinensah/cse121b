/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return number1+number2;
}
function  addNumbers()
{
    let num1 = Number(document.querySelector("#add1").value);
    let num2 = Number(document.querySelector("#add2").value);
    let sum = add(num1,num2);
    document.querySelector("#sum").value = sum;   
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function(number3, number4)
{
    return number3 - number4;
}
let subtractNumbers = function()
{
    let num3 = Number(document.querySelector("#subtract1").value);
    let num4 = Number(document.querySelector("#subtract2").value);
    let difference = subtract(num3, num4);
    document.querySelector("#difference").value = difference;
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
/* Arrow Function - Multiply Numbers */
let multiply = (factor1, factor2) => factor1 * factor2;
let multiplyNumbers =  () => {
    let num5 = document.getElementById('factor1').value;
    let num6 = document.getElementById('factor2').value;
    let product = num5 * num6;
    document.querySelector("#product").value = product;
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let num7 = document.getElementById('dividend').value;
    let num8 = document.getElementById('divisor').value;
    let quotient = num7 / num8
    document.querySelector("#quotient").value = quotient;
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers)
/* Decision Structure */
// let total = function()
// {
//     let number = Number(document.querySelector("#subtoatal").value);
// }
// document.querySelector("#gettotal").addEventListener("",)

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 13
const array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// Step 2: Assi[gn the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = array_1;
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