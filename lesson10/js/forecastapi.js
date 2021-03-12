// assign the api a constant variable
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=4c4183953647e4575d04149487faf8df&units=imperial";
// use the fetch ()
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    // -id Needs a #
   
  const day1temp = document.querySelector('#day1temp');
  day1temp.textContent = jsObject.list[0].main.temp + " F"+ "\xB0";
  const day2temp = document.querySelector('#day2temp');
  day2temp.textContent = jsObject.list[14].main.temp + " F"+ "\xB0";
  const day3temp = document.querySelector('#day3temp');
  day3temp.textContent = jsObject.list[21].main.temp + " F"+ "\xB0";
  const day4temp = document.querySelector('#day4temp');
  day4temp.textContent = jsObject.list[29].main.temp + " F"+ "\xB0";
  const day5temp = document.querySelector('#day5temp');
  day5temp.textContent = jsObject.list[37].main.temp + " F"+ "\xB0";

  
  // const date1 = document.querySelector('#date1');
  // date1.textContent = jsObject.list[0].dt_txt;

 

  
  
  
  const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
  const desc1 = jsObject.list[0].weather[0].description;  // note how we reference the weather array
  // document.getElementById('imagesrc1').textContent = imagesrc1;  // informational specification only
  document.getElementById('icon1').setAttribute('src', imagesrc1);  // focus on the setAttribute() method
  document.getElementById('icon1').setAttribute('alt', desc1);

  const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.list[14].weather[0].icon + '.png';  // note the concatenation
  const desc2 = jsObject.list[0].weather[0].description;  // note how we reference the weather array
  // document.getElementById('imagesrc2').textContent = imagesrc2;  // informational specification only
  document.getElementById('icon2').setAttribute('src', imagesrc2);  // focus on the setAttribute() method
  document.getElementById('icon2').setAttribute('alt', desc2);

  const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.list[21].weather[0].icon + '.png';  // note the concatenation
  const desc3 = jsObject.list[0].weather[0].description;  // note how we reference the weather array
  // document.getElementById('imagesrc2').textContent = imagesrc2;  // informational specification only
  document.getElementById('icon3').setAttribute('src', imagesrc3);  // focus on the setAttribute() method
  document.getElementById('icon3').setAttribute('alt', desc3);

  const imagesrc4 = 'https://openweathermap.org/img/w/' + jsObject.list[29].weather[0].icon + '.png';  // note the concatenation
  const desc4 = jsObject.list[0].weather[0].description;  // note how we reference the weather array
  // document.getElementById('imagesrc2').textContent = imagesrc2;  // informational specification only
  document.getElementById('icon4').setAttribute('src', imagesrc4);  // focus on the setAttribute() method
  document.getElementById('icon4').setAttribute('alt', desc4);

  const imagesrc5 = 'https://openweathermap.org/img/w/' + jsObject.list[37].weather[0].icon + '.png';  // note the concatenation
  const desc5 = jsObject.list[0].weather[0].description;  // note how we reference the weather array
  // document.getElementById('imagesrc2').textContent = imagesrc2;  // informational specification only
  document.getElementById('icon5').setAttribute('src', imagesrc5);  // focus on the setAttribute() method
  document.getElementById('icon5').setAttribute('alt', desc5);

  const daydesc1 = document.querySelector('#daydesc1');
  daydesc1.textContent = jsObject.list[0].weather[0].description;

  const daydesc2 = document.querySelector('#daydesc2');
  daydesc2.textContent = jsObject.list[14].weather[0].description;

  constdaydesc3 = document.querySelector('#daydesc3');
  daydesc3.textContent = jsObject.list[21].weather[0].description;

  const daydesc4 = document.querySelector('#daydesc4');
  daydesc4.textContent = jsObject.list[29].weather[0].description;

  const daydesc5 = document.querySelector('#daydesc5');
  daydesc5.textContent = jsObject.list[37].weather[0].description;


 
});