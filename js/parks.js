function soLookUp(searchTerm) {
  fetch("https://data.nashville.gov/resource/74d7-b74t.json")
    .then(response => response.json())
    .then(parsedData => {
      parsedData.forEach(element => {
        console.log(element.park_name);
        document.querySelector(
          "#section-results"
        ).innerHTML += `<h3>${element.park_name}</h3>`;
      });
    });
}

document.querySelector("#search-parks").addEventListener("click", event => {
  let searchTerm = document.querySelector("#so-search-bar").value;
  soLookUp(searchTerm);
});