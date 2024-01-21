/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let fullName = 'Melvvinensah Bunduka';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = fullName;

// Step 3: declare and instantiate a variable to hold the current year
let year = 2024;

// Step 4: place the value of the current year variable into the HTML file
let currentYear = document.getElementById('year');
currentYear.textContent = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
let myImage = new Image;
myImage.src = 'images/FBimg.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', 'images/FBimg.jpg');

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const foods = ['foofoo and egussi', 'Rice and Krainkrain', 'fried rice and beef', 'ghana foofoo']

// Step 2: place the values of the favorite foods variable into the HTML file
let food = document.getElementById('food');
food.textContent = foods;

// Step 3: declare and instantiate a variable to hold another favorite food
let anotherFood = "Yogurt"

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(anotherFood);

// Step 5: repeat Step 2
food.textContent = foods;

// Step 6: remove the first element in the favorite foods array
foods.shift();

// Step 7: repeat Step 2
food.textContent = foods;

// Step 8: remove the last element in the favorite foods array
foods.pop();

// Step 7: repeat Step 2
food.textContent = foods;