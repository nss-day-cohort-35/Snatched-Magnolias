// Cotton Eyed Joe AND HE GIVES IT BACK as a string
function dataDisplay(text, index) {
  return `<h3 id="${text}">${text}</h3> <button type="button" onclick="addMeetUpsToItin(${index})">ADD</button>`;
}

//Saving Data to Itinerary 
function addMeetUpsToItin (meetUpIndex){
    let meetUpName = meetUpsArray[meetUpIndex].name.text;
    meetUpsName = dataDisplay;
    let itineraryContainer = document.querySelector("#meetUpsItinerary");
    itineraryContainer.innerHTML = `<h3>${meetUpName}</h3>`;

//Resets after adding to itinerary//
     document.querySelector("#section-results").innerHTML=""
}

//  Searching the API for obj.name
let meetUpsArray = [];
function skMeetUps(searchTerm) {
  fetch(
    `https://www.eventbriteapi.com/v3/events/search/?q=${searchTerm}&location.address=nashville&token=7JJ7JBOQ23XZHTFLOROV`
  )
    .then(result => result.json())
    .then(parsedResult => {
      let contentBox = document.querySelector("#section-results");
      contentBox.innerHTML = "";
      meetUpsArray = [];
      parsedResult.events.forEach((event, index) => {
        contentBox.innerHTML += dataDisplay(event.name.text, index);
        meetUpsArray[index] = event;
      });
    });
}

//Event Listener for search click
document.querySelector("#search-meetUps")
  .addEventListener("click", event => {
    let searchTerm = document.querySelector("#sk-search-bar").value;
    skMeetUps(searchTerm);
  });
