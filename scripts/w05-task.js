/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');

let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {

    temples.forEach((temple) => {
        let article = document.createElement("article");

        let header3 = document.createElement("h3")
        header3.innerHTML = temple.templeName;

        let templeImage = document.createElement("img")
        templeImage.src = temple.imageUrl
        templeImage.alt = temple.location


        article.appendChild(header3);
        article.appendChild(templeImage);

        templesElement.appendChild(article);

    });
}


/* async getTemples Function using fetch()*/
let getTemples = async () => {
    let response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};


/* reset Function */
const reset = () => {
    // Clear all <article> elements from the templesElement
    templesElement.innerHTML = '';
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
// Get the HTML element with the ID of "filtered"
const filteredDropdown = document.querySelector('#filtered');

// Add a change event listener to the filteredDropdown element
filteredDropdown.addEventListener('change', () => {
  // Call the filterTemples function and pass the templeList as an argument
  filterTemples(templeList);
});
getTemples();
