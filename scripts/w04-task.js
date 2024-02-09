/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Melvinensah Bunduka",
    photo : "images/FBimg.jpg",
    favoriteFoods : ["rice and krain-krain","jelly","foo-foo","friedrice and chicken"],
    hobbies : ["playiing football","watching footabll match","scriptur study"],
    placesLived : [],
}


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push= [
{
    place: "Bo City",
    timeLived: 4
},
{
    place: "Kailahun",
    timeLived: 7
},
{
    place: "Liberia",
    timeLived: 5
},
{
    place: "Kambia",
    timeLived: 1
},
];




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

let placesOut = "";
place = myProfile.placesLived
place.forEach(countPlaces)

document.getElementById("places-lived").innerHTML = placesOut;

function countPlaces(place) {
    placesOut += "<dt>" + place.place + "</dt>" + "<dd>" + place.timeLived + " years" + "</dt>";
}
