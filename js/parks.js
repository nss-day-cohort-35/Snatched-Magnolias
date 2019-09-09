function lookUp(searchTerm) {
  fetch("https://data.nashville.gov/resource/74d7-b74t.json")
    .then(response => response.json())
    .then(parsedData => {
      parsedData.forEach(element => {
        console.log(element.park_name);
        console.log(element.acres);
        console.log(element.disc_golf);
        document.querySelector(
          "#section-results"
        ).innerHTML += `<h3>Park Name: ${element.park_name}<button type="button" id="buttonAdd">Add</button>`;
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
  lookUp(searchTerm);
});

document.querySelector("#buttonAdd").addEventListener("click", event => {
  let addingITem = document.querySelector("#so-search-bar").value;
  addingTo(addingItem);
});

/*
if ("geolocation" in navigator) {
  // check if geolocation is supported/enabled on current browser
  navigator.geolocation.getCurrentPosition(
    function success(position) {
      // for when getting location is a success
      console.log(
        "latitude",
        position.coords.latitude,
        "longitude",
        position.coords.longitude
      );
    },
    function error(error_message) {
      // for when getting location results in an error
      console.error(
        "An error has occured while retrieving location",
        error_message
      );
    }
  );
} else {
  // geolocation is not supported
  // get your location some other way
  console.log("geolocation is not enabled on this browser");
}
*/
