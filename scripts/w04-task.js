/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Melvinensah Bunduka",
    photo : "images/FBimg.jpg",
    favoriteFoods : ["rice and krain-krain","jelly","foo-foo","friedrice and chicken"],
    hobbies : ["playiing football","watching footabll match","scripture study"],
    placesLived : []
}


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
{
    place: "Bo City",
    length: "4 years"
},
{
    place: "Kailahun",
    length: "7 years"
},
{
    place: "Liberia",
    length: "5 Years"
},
{
    place: "Kambia",
    length: "1 year"
},
);




/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").innerHTML=myProfile.name;


/* Photo with attributes */
photo_out = document.getElementById("photo")
photo_out.setAttribute("src", myProfile.photo);



/* Favorite Foods List*/
foodList = myProfile.favoriteFoods;

for (let i = 0; i < foodList.length; i++) {
    let list = document.createElement('li');
    list.innerText = foodList[i];
    document.querySelector('#favorite-foods').appendChild(list);
}


/* Hobbies List */
hobbiesList = myProfile.hobbies;

for (let i = 0; i < hobbiesList.length; i++) {
    let list = document.createElement('li');
    list.innerText = hobbiesList[i];
    document.querySelector('#hobbies').appendChild(list);
}


/* Places Lived DataList */

const placesLivedList = document.getElementById("places-lived");
myProfile.placesLived.forEach(place => {
    const dt = document.createElement("dt");
    dt.textContent = place.place;
    placesLivedList.appendChild(dt);

    const dd = document.createElement("dd");
    dd.textContent = place.length;
    placesLivedList.appendChild(dd);
});
