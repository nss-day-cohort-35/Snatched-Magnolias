function soResults(array) {
  array.forEach(data => {
    document.querySelector("#section-results").innerHTML += dataDisplay(data);
  });
}

function lookUp(searchTerm) {
  fetch("https://data.nashville.gov/resource/74d7-b74t.json")
  .then(result => result.json())
  .then(parsedResult => {
      console.log(parsedResult.restaurants);
      parsedResult.restaurants.forEach(element => {
          document.querySelector("#section-results").innerHTML += dataDisplay (data);
      });

  });
}

document.querySelector("#search-parks").addEventListener("click", event => {
  let searchTerm = document.querySelector("#so-search-bar").value;
  lookUp(searchTerm);
});

lookUp();
