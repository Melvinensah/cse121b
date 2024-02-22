/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples-div');

let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {

    temples.forEach((temple) => {
        let article = document.createElement("article");

        let header3 = document.createElement("h3")
        header3.innerHTML = temple.templeName;

        let templeImage = document.createElement("img")
        templeImage.setAttribute("src", temple.imageUrl)
        templeImage.setAttribute("alt", temple.location)


        article.appendChild(header3);
        article.appendChild(templeImage);

        document.querySelector("#temples").appendChild(article);

    });


}


/* async getTemples Function using fetch()*/
let getTemples = async () => {
    let response = await fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};
getTemples();

/* reset Function */
const reset = () => {
    document.querySelector("#temples").innerHTML = "";
};
/* filterTemples Function */
const filterTemples = (temples) => {
    // Call the reset function to clear the output
    reset();
  
    // Obtain the value of the HTML element with the ID of filtered
    const filter = document.querySelector('#filtered').value;
  
    // Use a switch statement to handle different filter cases
    switch (filter) {
      case 'utah':
        // Filter for temples where the location contains "Utah" as a string
        displayTemples(temples.filter(temple => temple.location.includes('Utah')));
        break;
      case 'notutah':
        // Filter for temples where the location does not contain "Utah" as a string
        displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
        break;
      case 'older':
        // Filter for temples where the dedicated date is before 1950
        displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
        break;
      case 'all':
        // No filter, just use temples as the argument
        displayTemples(temples);
        break;
      default:
        // Handle other cases if needed
        break;
    }
  };
  /* Event Listener */
document.querySelector("#sortBy").addEventListener("change", sortBy);
