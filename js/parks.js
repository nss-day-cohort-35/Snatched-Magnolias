// Cotton Eyed Joe AND HE GIVES IT BACK as a string
function dataDisplay(data) {
  return `<h3>${data.name.text}<h3>`;
}

// Gives 1 out of 50 balls to Cotton Eyed Joe
function soResults(array) {
  array.forEach(data => {
    document.querySelector("#section-results").innerHTML += dataDisplay(data);
  });
}

function lookUp (searchTerm){
  fetch("https://data.nashville.gov/resource/74d7-b74t.json")




document.querySelector("#search-meetUps").addEventListener ("click", event => {
  let searchTerm = document.querySelector("#so-search-bar").value
  lookUp(searchTerm);
});