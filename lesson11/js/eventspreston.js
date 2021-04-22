const requestURL = 'https://hbowlby1.github.io/lesson-9/json/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {

        // V this is how you select specifically V          || = or     this allows you to parse through "towns"

      if(towns[i].name == "Preston"){
        //   V this creates each element V

        let card = document.createElement('section');
        let events1 = document.createElement('p');
        let events2 = document.createElement('p');
        let events3 = document.createElement('p');
       

    //    V this places the data into each element you created above, variable name must carry V

        events1.textContent = towns[i].events[0];
        events2.textContent = towns[i].events[1];
        events3.textContent = towns[i].events[2];
       

        // .setAttribute = images, .textContent = type


        let div = document.createElement('div');

        card.appendChild(events1);
        card.appendChild(events2);
        card.appendChild(events3);
        

        document.querySelector('div.events').appendChild(card);
      }
    
      
    }
  });
   
   
   

