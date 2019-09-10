// Cotton Eyed Joe AND HE GIVES IT BACK as a string
function dataDisplay(text, index) {
  return `<h3>${text}<h3> <button type="button" onclick="addMeetUpsToItin(${index})">ADD</button>`;
}

function addMeetUpsToItin (meetUpIndex){
    let meetUpName = meetUpsArray[meetUpIndex].name.text;
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

document.querySelector("#section-results").addEventListener("click", event => {
  if (event.target.id.startsWith("buttonIdsk")) {
    let itemId = event.target.id.split("--")[1];
    let selectedItem = document.getElementById(itemId);
    let itineraryContainer = document.getElementById("meetUpsItinerary");
    itineraryContainer.innerHTML = "";
    itineraryContainer.appendChild(selectedItem);
    document.querySelector("#section-results").innerHTML = " ";
  }
});
