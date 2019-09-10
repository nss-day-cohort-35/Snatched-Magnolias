function lookUp(searchTerm) {
  return fetch(
    `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${searchTerm}&apikey=6e72e09f0a9e5501ab2d5645e8fac52d`
  )
    .then(result => result.json())
    .then(parsedResult => {
      return parsedResult;
    });
}

const foodArray = []

document.querySelector("#search-restaurants").addEventListener("click", event => {
    let searchTerm = document.querySelector("#aw-search-bar").value
    lookUp(searchTerm)
    .then(restaurantData => {
        console.log(restaurantData.restaurants);
        i = -1;
        foodArray.length = 0;
        restaurantData.restaurants.forEach(item => {
            i++;
            foodArray[i] = item;
            document.querySelector("#section-results").innerHTML += `<h3 id=${i}>${item.restaurant.name}</h3> <button type="button" id="buttonIdaw--${i}">ADD</button>`;
        })
    })
});
// function getSelectedOptions()

const restaurantItin = [];


document.querySelector("#section-results").addEventListener("click", event => {
    if (event.target.id.startsWith("buttonIdaw")) {
        let itemId = event.target.id.split("--")[1]
        let selectedItem = document.getElementById(itemId)
        let itineraryContainer = document.getElementById("restaurantItinerary")
        itineraryContainer.innerHTML=""
        itineraryContainer.appendChild(selectedItem)
        document.querySelector("#section-results").innerHTML=" " 
    }
});





