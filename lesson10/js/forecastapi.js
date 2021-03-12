// assign the api a constant variable
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=4c4183953647e4575d04149487faf8df&units=imperial";
// use the fetch ()
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    // -id Needs a #
   
  const day1temp = document.querySelector('#day1temp');
  day1temp.textContent = jsObject.list[0].main.temp;
  const day2temp = document.querySelector('#day2temp');
  day2temp.textContent = jsObject.list[1].main.temp;
  const day3temp = document.querySelector('#day3temp');
  day3temp.textContent = jsObject.list[2].main.temp;
  const day4temp = document.querySelector('#day4temp');
  day4temp.textContent = jsObject.list[3].main.temp;
  const day5temp = document.querySelector('#day5temp');
  day5temp.textContent = jsObject.list[4].main.temp;

 

  
  
  
   const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[1].icon + '.png';  // note the concatenation

   const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
  document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
  document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
  document.getElementById('icon').setAttribute('alt', desc);
});