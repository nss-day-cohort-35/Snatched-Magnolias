function concertSearch(genre) {
  fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=nashville&radius=25&apikey=FHGsJMHDgolgJb3l9NsY4GYpxoLZTMmC&classificationName=${genre}`
  )
    .then(response => response.json())
    .then(parsedData => {
      console.table(parsedData._embedded.events);
      parsedData._embedded.events.forEach(element => {
        document.querySelector(
          "#section-results"
        ).innerHTML += `<h3 id=${element.id}>${element.name}</h3> <button type="button" id="buttonAdd--${element.id}">ADD</button>`;
      });
    });
}

document.querySelector("#search-concerts").addEventListener("click", event => {
  let searchTerm = document.querySelector("#ct-search-bar").value;
  concertSearch(searchTerm);
});

document.querySelector("#section-results").addEventListener("click", event => {
  if (event.target.id.startsWith("buttonAdd")) {
    let eventId = event.target.id.split("--")[1];
    let selectedEvent = document.getElementById(eventId);
    let itineraryContainer = document.getElementById("concertItinerary");
    itineraryContainer.innerHTML = "";
    itineraryContainer.appendChild(selectedEvent);

    //Resets after adding to itinerary//
    document.querySelector("#section-results").innerHTML = "";
  }
});

let moString = "mo is the best";
moString.split(" ")[1][("mo", "is", "the", "best")];
