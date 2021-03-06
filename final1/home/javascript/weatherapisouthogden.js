

// assign the api a constant variable
const sapiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=41.191288718015706&lon=-111.96805186667922&exclude=hourly,minutely&appid=4c4183953647e4575d04149487faf8df&units=imperial";

// 41.191288718015706, -111.96805186667922
// use the fetch ()
fetch(sapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    // -id Needs a #
   
  const temperature = document.querySelector('#temperature');
//   it wouldn't work because it was weather not forcast in the url
   temperature.textContent = jsObject.current.temp; 

   const humidity = document.querySelector('#humidity');
   humidity.textContent = jsObject.current.humidity + '%';

   const currentcond = document.querySelector('#currentcond');
   currentcond.textContent = jsObject.current.weather[0].description;

   const weatheralert = document.querySelector('#weatheralert');
   weatheralert.textContent = jsObject.alerts[0].event +","+ jsObject.alerts[1].event;


   


});


