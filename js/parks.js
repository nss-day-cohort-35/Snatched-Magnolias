fetch("https://data.nashville.gov/resource/74d7-b74t.json")
  .then(response => response.json())
  .then(parsedData => {
    console.table(parsedData);
    return parsedData.events;
  });
