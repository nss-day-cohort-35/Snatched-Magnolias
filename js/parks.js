function soLookUp(searchTerm) {
  fetch("https://data.nashville.gov/resource/74d7-b74t.json")
    .then(response => response.json())
    .then(parsedData => {
      parsedData.forEach(element => {
        console.log(element.park_name);
        console.log(element.acres);
        console.log(element.disc_golf);
        document.querySelector(
          "#section-results"
        ).innerHTML += `<h3>Park Name: ${element.park_name}<button type="button" id="so-buttonAdd--${element.park_name}">ADD</button>`;
        document.querySelector(
          "#section-results"
        ).innerHTML += `<h3>Disc Golf: ${element.disc_golf}</h3>`;
        document.querySelector(
          "#section-results"
        ).innerHTML += `<h3>Dog Park: ${element.dog_park}</h3>`;
        document.querySelector(
          "#section-results"
        ).innerHTML += `<h3>Hiking Trails: ${element.hiking_trails}</h3>`;
      });
    });
}

document.querySelector("#search-parks").addEventListener("click", event => {
  let searchTerm = document.querySelector("#so-search-bar").value;
  soLookUp(searchTerm);
});

document.querySelector("#section-results").addEventListener("click", event => {
  if (event.target.id.startsWith("so-buttonAdd")) {
    let eventId = event.target.id.split("--")[1];
    let selectedEvent = document.getElementById(eventId);
    let itineraryContainer = document.getElementById("parkItinerary");
    itineraryContainer.appendChild(selectedEvent);
    document.querySelector("#section-results").innerHTML = "";
  }
});
