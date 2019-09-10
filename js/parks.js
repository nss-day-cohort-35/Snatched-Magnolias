/*
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
        ).innerHTML += `<h3 id=${element.mapped_location}>Park Name: ${element.park_name}<button type="button" id="buttonAddso--${element.mapped_location}">ADD</button>`;
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
*/

function soLookUp(searchTerm) {
  return fetch("https://data.nashville.gov/resource/74d7-b74t.json")
    .then(response => response.json())
    .then(parsedResult => {
      return parsedResult;
    });
}

document.querySelector("#search-parks").addEventListener("click", event => {
  let searchTerm = document.querySelector("#so-search-bar").value;
  soLookUp(searchTerm).then(parkData => {
    console.log(parkData);
    i = -1;
    parkArray.length = 0;
    parkData.forEach(item => {
      i++;
      parkArray[i] = item;
      document.querySelector(
        "#section-results"
      ).innerHTML += `<h3 id="title--${i}">${item.park_name}</h3> <button type="button" id="buttonIdso--${i}">ADD</button>`;
    });
  });
});

const parkArray = [];

document.querySelector("#section-results").addEventListener("click", event => {
  if (event.target.id.startsWith("buttonIdso")) {
    let itemId = event.target.id.split("--")[1];
    console.log(itemId, "itemId");
    let selectedItem = document.getElementById(`title--${itemId}`);
    console.log(selectedItem, "selectedItem");
    let itineraryContainer = document.getElementById("parkItinerary");
    itineraryContainer.innerHTML = "";
    itineraryContainer.appendChild(selectedItem);
    document.querySelector("#section-results").innerHTML = " ";
  }
});

/*
document.querySelector("#search-parks").addEventListener("click", event => {
  let searchTerm = document.querySelector("#so-search-bar").value;
  soLookUp(searchTerm);
});

document.querySelector("#section-results").addEventListener("click", event => {
  if (event.target.id.startsWith("buttonAddso")) {
    let parkID = event.target.id.split("--")[1];
    let selectedPark = document.getElementById(parkID);
    let itineraryContainer = document.getElementById("parkItinerary");
    itineraryContainer.appendChild(selectedPark);
    document.querySelector("#section-results").innerHTML = "";
  }
});
*/
