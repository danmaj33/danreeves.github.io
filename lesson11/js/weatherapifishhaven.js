

// assign the api a constant variable
const sapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=4c4183953647e4575d04149487faf8df&units=imperial";
// use the fetch ()
fetch(sapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    // -id Needs a #
   
  const temperature = document.querySelector('#temperature');
//   it wouldn't work because it was weather not forcast in the url
   temperature.textContent = jsObject.main.temp; 

   const hightemperature = document.querySelector('#hightemperature');
   hightemperature.textContent = jsObject.main.temp_max;

   const lowtemperature = document.querySelector('#lowtemperature');
   lowtemperature.textContent = jsObject.main.temp_min;

   const windspeed = document.querySelector('#windspeed');
   windspeed.textContent = jsObject.wind.speed;

   const humidity = document.querySelector('#humidity');
   humidity.textContent = jsObject.main.humidity + '%';

   const currentcond = document.querySelector('#currentcond');
   currentcond.textContent = jsObject.weather[0].description;

  // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + ".png";  // note the concatenation

  //  const desc = jsObject.weather[0].description;  // note how we reference the weather array
  // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
  // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
  // document.getElementById('icon').setAttribute('alt', desc);
});