// JavaScript source code

// assign the api a constant variable
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=4c4183953647e4575d04149487faf8df&units=imperial";
// use the fetch ()
fetch(apiURL)
    .then((response) => response.json())
    .then((jsFullObject) => {                   //jsObject was changed to jsFullObject to save on edits
        console.log(jsFullObject);              //jsObject was changed to jsFullObject to save on edits

        /////////////// jsObject will get the filtered data from jsFullObject
        const jsObject = jsFullObject.list.filter((element) => element.dt_txt.includes('18:00'))

        // -id Needs a #

        const day1temp = document.querySelector('#day1temp');
        day1temp.textContent = Math.round(jsObject[0].main.temp) + " F" + "\xB0";
        const day2temp = document.querySelector('#day2temp');
        day2temp.textContent = Math.round(jsObject[1].main.temp) + " F" + "\xB0";
        const day3temp = document.querySelector('#day3temp');
        day3temp.textContent = Math.round(jsObject[2].main.temp) + " F" + "\xB0";
        const day4temp = document.querySelector('#day4temp');
        day4temp.textContent = Math.round(jsObject[3].main.temp) + " F" + "\xB0";
        const day5temp = document.querySelector('#day5temp');
        day5temp.textContent = Math.round(jsObject[4].main.temp) + " F" + "\xB0";

        ////////////////////////////////////////////////////
        
        const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject[0].weather[0].icon + '.png';  // note the concatenation
        const desc1 = jsObject[0].weather[0].description;  // note how we reference the weather array
        // document.getElementById('imagesrc1').textContent = imagesrc1;  // informational specification only
        document.getElementById('icon1').setAttribute('src', imagesrc1);  // focus on the setAttribute() method
        document.getElementById('icon1').setAttribute('alt', desc1);

        const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject[1].weather[0].icon + '.png';  // note the concatenation
        const desc2 = jsObject[1].weather[0].description;  // note how we reference the weather array
        // document.getElementById('imagesrc2').textContent = imagesrc2;  // informational specification only
        document.getElementById('icon2').setAttribute('src', imagesrc2);  // focus on the setAttribute() method
        document.getElementById('icon2').setAttribute('alt', desc2);

        const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject[2].weather[0].icon + '.png';  // note the concatenation
        const desc3 = jsObject[2].weather[0].description;  // note how we reference the weather array
        // document.getElementById('imagesrc2').textContent = imagesrc2;  // informational specification only
        document.getElementById('icon3').setAttribute('src', imagesrc3);  // focus on the setAttribute() method
        document.getElementById('icon3').setAttribute('alt', desc3);

        const imagesrc4 = 'https://openweathermap.org/img/w/' + jsObject[3].weather[0].icon + '.png';  // note the concatenation
        const desc4 = jsObject[3].weather[0].description;  // note how we reference the weather array
        // document.getElementById('imagesrc2').textContent = imagesrc2;  // informational specification only
        document.getElementById('icon4').setAttribute('src', imagesrc4);  // focus on the setAttribute() method
        document.getElementById('icon4').setAttribute('alt', desc4);

        const imagesrc5 = 'https://openweathermap.org/img/w/' + jsObject[4].weather[0].icon + '.png';  // note the concatenation
        const desc5 = jsObject[4].weather[0].description;  // note how we reference the weather array
        // document.getElementById('imagesrc2').textContent = imagesrc2;  // informational specification only
        document.getElementById('icon5').setAttribute('src', imagesrc5);  // focus on the setAttribute() method
        document.getElementById('icon5').setAttribute('alt', desc5);
                

        const daydesc1 = document.querySelector('#daydesc1');
        daydesc1.textContent = jsObject[0].weather[0].description;

        const daydesc2 = document.querySelector('#daydesc2');
        daydesc2.textContent = jsObject[1].weather[0].description;

        constdaydesc3 = document.querySelector('#daydesc3');
        daydesc3.textContent = jsObject[2].weather[0].description;

        const daydesc4 = document.querySelector('#daydesc4');
        daydesc4.textContent = jsObject[3].weather[0].description;

        const daydesc5 = document.querySelector('#daydesc5');
        daydesc5.textContent = jsObject[4].weather[0].description;


        const weekday = new Date(jsObject[0].dt_txt);
        const i = weekday.getDay();
        console.log(i)
        const dayTitle = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        //let day = 0

        if (i === 0) {
            nextdate = "Sunday";
        } else if (i === 1) {
            nextdate = "Monday";
        } else if (i === 2) {
            nextdate = "Tuesday";
        } else if (i === 3) {
            nextdate = "Wednesday";
        } else if (i === 4) {
            nextdate = "Thursday";
        } else if (i === 5) {
            nextdate = "Friday";
        } else if (i === 6) {
            nextdate = "Saturday";
        }

        document.getElementById("sdate1").innerHTML = nextdate;

        const weekday2 = new Date(jsObject[1].dt_txt);
        const i1 = weekday2.getDay();
        // console.log(i)
        const dayTitle1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        //let day = 0

        if (i1 === 0) {
            nextdate2 = "Sunday";
        } else if (i1 === 1) {
            nextdate2 = "Monday";
        } else if (i1 === 2) {
            nextdate2 = "Tuesday";
        } else if (i1 === 3) {
            nextdate2 = "Wednesday";
        } else if (i1 === 4) {
            nextdate2 = "Thursday";
        } else if (i1 === 5) {
            nextdate2 = "Friday";
        } else if (i1 === 6) {
            nextdate2 = "Saturday";
        }

        document.getElementById("sdate2").innerHTML = nextdate2;


        //  day 3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

        const weekday3 = new Date(jsObject[2].dt_txt);
        const i2 = weekday3.getDay();
        //  console.log(i)
        const dayTitle2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        //let day = 0

        if (i2 === 0) {
            nextdate3 = "Sunday";
        } else if (i2 === 1) {
            nextdate3 = "Monday";
        } else if (i2 === 2) {
            nextdate3 = "Tuesday";
        } else if (i2 === 3) {
            nextdate3 = "Wednesday";
        } else if (i2 === 4) {
            nextdate3 = "Thursday";
        } else if (i2 === 5) {
            nextdate3 = "Friday";
        } else if (i2 === 6) {
            nextdate3 = "Saturday";
        }

        document.getElementById("sdate3").innerHTML = nextdate3;


        ///////////////////////////////////////////////////////////

        const weekday4 = new Date(jsObject[3].dt_txt);
        const i3 = weekday4.getDay();
        // console.log(i)
        const dayTitle3 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        //let day = 0

        if (i3 === 0) {
            nextdate4 = "Sunday";
        } else if (i3 === 1) {
            nextdate4 = "Monday";
        } else if (i3 === 2) {
            nextdate4 = "Tuesday";
        } else if (i3 === 3) {
            nextdate4 = "Wednesday";
        } else if (i3 === 4) {
            nextdate4 = "Thursday";
        } else if (i3 === 5) {
            nextdate4 = "Friday";
        } else if (i3 === 6) {
            nextdate4 = "Saturday";
        }

        document.getElementById("sdate4").innerHTML = nextdate4;

        /////////////////////////////////////////////////////////////////

        const weekday5 = new Date(jsObject[4].dt_txt);
        const i4 = weekday5.getDay();
        //  console.log(i)
        const dayTitle4 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        //let day = 0

        if (i4 === 0) {
            nextdate5 = "Sunday";
        } else if (i4 === 1) {
            nextdate5 = "Monday";
        } else if (i4 === 2) {
            nextdate5 = "Tuesday";
        } else if (i4 === 3) {
            nextdate5 = "Wednesday";
        } else if (i4 === 4) {
            nextdate5 = "Thursday";
        } else if (i4 === 5) {
            nextdate5 = "Friday";
        } else if (i4 === 6) {
            nextdate5 = "Saturday";
        }

        document.getElementById("sdate5").innerHTML = nextdate5;


    });