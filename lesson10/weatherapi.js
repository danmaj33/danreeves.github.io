

// assign the api a constant variable
const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=4c4183953647e4575d04149487faf8df&units=imperial";
// use the fetch ()
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
   
  const currentTemp =document.querySelector('currentTemp');
  currentTemp.textContent = jsObject.main.temp;

  const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
});