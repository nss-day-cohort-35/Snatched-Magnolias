function lookUp(searchTerm) {
  fetch("https://data.nashville.gov/resource/74d7-b74t.json")
    .then(response => response.json())
    .then(parsedData => {
      console.table(parsedData.park_name);
      parsedData.park_name.forEach(element => {
        document.querySelector(
          "#section-results"
        ).innerHTML += `<h3>${element.name}</h3>`;
      });
    });
}

document.querySelector("#search-parks").addEventListener("click", event => {
  let searchTerm = document.querySelector("#so-search-bar").value;
  lookUp(searchTerm);
});

lookUp();
