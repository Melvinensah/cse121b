/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Melvinensah Bunduka";
let currentYear = 2024;
let profilePicture = "images/FBimg.jpg";



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img')





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
currentYear.textContent = year;
imageElement.setAttribute('src', profilePicture);
/*.setAttribute('src', 'images/FBimg.jpg');







/* Step 5 - Array */

const foods = ['rice and krainkrain', ' foofoo and egussi', ' ghana foofoo', ' fried rice and chicken']


let food = document.getElementById('food');
food.textContent = foods;


let anotherFood = "Yogurt"


foods.push(anotherFood);


food.textContent = foods;


foods.shift();


food.textContent = foods;


foods.pop();

food.textContent = foods;





