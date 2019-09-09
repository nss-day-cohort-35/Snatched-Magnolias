function lookUp(searchTerm) {
  return fetch(
    `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${searchTerm}&apikey=6e72e09f0a9e5501ab2d5645e8fac52d`
  )
    .then(result => result.json())
    .then(parsedResult => {
      return parsedResult;
    });
}

document
  .querySelector("#search-restaurants")
  .addEventListener("click", event => {
    let searchTerm = document.querySelector("#aw-search-bar").value;
    lookUp(searchTerm).then(restaurantData => {
      console.log(restaurantData.restaurants);
      restaurantData.restaurants.forEach(item => {
        document.querySelector(
          "#section-results"
        ).innerHTML += `<h3>${item.restaurant.name}</h3>`;
      });
    });
  });
// function getSelectedOptions()

const restaurantItin = [];
