fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=nashville&radius=25&apikey=FHGsJMHDgolgJb3l9NsY4GYpxoLZTMmC")
     .then(response => response.json()) 
          .then(parsedData => {
         console.table(parsedData)
         return parsedData.events;
});