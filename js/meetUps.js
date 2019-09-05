// Altering URL
const skSearchTerm = "books"

// Finding meetUps in index.html
const meetUpsContainer = document.querySelector(".meetUps");

// Fetching Data
const API = {
  eventbrite() {
    return fetch(
      `https://www.eventbriteapi.com/v3/events/search/?q=${search}&location.address=nashville&token=7JJ7JBOQ23XZHTFLOROV`,
      {
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(object => object.json())
      .then(parsedObject => {
        console.table(parsedObject.events);
        return parsedObject.events;
      });
  }
};

// Cotton Eyed Joe AND HE GIVES IT BACK as a string
function dataDisplay (data) {
return `<h3>${data.name.text}<h3>`
}

// Gives 1 out of 50 balls to Cotton Eyed Joe
function skResults (array) {
array.forEach(data => {
document.querySelector("#section--results").innerHTML += dataDisplay(data);
});
}

// Calling Fetched Data
API.eventbrite()
.then(data => {
  skResults(data)
});


const resultOutput = document.querySelector(“#meetUpsResultsContainer”)
const restaurantItinerary = document.querySelector(“#meetUpsItinerary”)
function lookUp (searchTerm){
   fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${skSearchTerm}&location.address=nashville&token=7JJ7JBOQ23XZHTFLOROV`)
   .then(result => result.json())
       .then(parsedResult => {
           console.log(parsedResult.meetUps);
           parsedResult.meetUps.forEach(element => {
            document.querySelector("#section--results").innerHTML += dataDisplay(data);;
           });
       });
   }
document.querySelector(“#search-meetUps”).addEventListener (“click”, event => {
   let searchTerm = document.querySelector(“#search-bar”).value
   lookUp(searchTerm);
})