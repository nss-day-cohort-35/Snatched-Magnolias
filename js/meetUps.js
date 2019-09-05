// Cotton Eyed Joe AND HE GIVES IT BACK as a string
function dataDisplay (data) {
return `<h3>${data.name.text}<h3>`
}

// Gives 1 out of 50 balls to Cotton Eyed Joe
function skResults (array) {
array.forEach(data => {
document.querySelector("#section-results").innerHTML += dataDisplay(data);
});
}

function lookUp (searchTerm){
  fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${searchTerm}&location.address=nashville&token=7JJ7JBOQ23XZHTFLOROV`)      
    .then(result => result.json())
        .then(parsedResult => {
            console.log(parsedResult.restaurants);
            parsedResult.restaurants.forEach(element => {
                document.querySelector("#section-results").innerHTML += dataDisplay (data);
            });
    
        });
    }


document.querySelector("#search-meetUps").addEventListener ("click", event => {
    let searchTerm = document.querySelector("#sk-search-bar").value
    lookUp(searchTerm);
})