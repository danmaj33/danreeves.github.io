

// assign the api a constant variable
const apiURL = "api.openweathermap.org/data/2.5/weather?q=5604473&appid=4c4183953647e4575d04149487faf8df";
// use the fetch ()
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });