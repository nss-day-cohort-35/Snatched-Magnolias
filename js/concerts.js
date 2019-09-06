function concertSearch (searchTerm){
     fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=nashville&radius=25&apikey=FHGsJMHDgolgJb3l9NsY4GYpxoLZTMmC")
     .then(response => response.json()) 
          .then(parsedData => {
         console.table(parsedData._embedded.events);
         parsedData._embedded.events.forEach(element => {
              document.querySelector("#section-results").innerHTML += `<h3>${element.name}</h3>`
         });
});

}

document.querySelector("#search-concerts").addEventListener ("click", event => {
     let searchTerm = document.querySelector("#ct-search-bar").value
     concertSearch(searchTerm);
})