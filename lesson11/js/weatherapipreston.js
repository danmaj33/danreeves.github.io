

// assign the api a constant variable
const sapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=4c4183953647e4575d04149487faf8df&units=imperial";
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


   let temp = jsObject.main.temp;
   let speed = jsObject.wind.speed;

 document.querySelector("#outputDiv").textContent = "N/A";

 function windchill(T,S) {
     let f = 35.74 + 0.6215*T-35.75*(Math.pow(S, 0.16)) + 0.4275*T*(Math.pow(S, 0.16));
     return f;
 }
 
 
 if (temp <=50 && speed >=3) {
     document.querySelector('#outputDiv').innerHTML = Math.round(windchill(temp,speed))+"&deg;"+" F";
 }

 

});







       
          
              
          