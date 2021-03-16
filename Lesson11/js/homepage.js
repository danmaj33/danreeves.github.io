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

      if(towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs"){
        //   V this creates each element V

        let card = document.createElement('section');
        let name = document.createElement('h2');
        let motto = document.createElement('p');
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let image = document.createElement('img');

    //    V this places the data into each element you created above, variable name must carry V

        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = "Year Founded: " + towns[i].yearFounded; 
        currentPopulation.textContent = "Population: " + towns[i].currentPopulation;
        averageRainfall.textContent = "Average Rainfall: " + towns[i].averageRainfall;
        image.setAttribute('src', towns[i].photo);
        image.setAttribute('alt',  towns[i].name);

        // .setAttribute = images, .textContent = type


        let div = document.createElement('div');

        div.appendChild(name);
        div.appendChild(motto);
        div.appendChild( yearFounded);
        div.appendChild(currentPopulation);
        div.appendChild( averageRainfall);
        card.appendChild(image);
        card.appendChild(div);


        document.querySelector('div.cards').appendChild(card);
      }
    
      
    }
  });
   
   
   




 