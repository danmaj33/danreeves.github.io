const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';



fetch(requestURL)
  .then(function(response){
    return response.json();
  })
  .then(function (jsonObject) {
    //   console.table(jsonObject);
      
      const prophets = jsonObject['prophets'];


// For loop for cycling through each profile
    for (let i = 0; i < prophets.length; i++ ) {

          //   Creating the element is here VVVVVVVVVVVVVVVV
        let card = document.createElement('section');
            let h2 = document.createElement('h2');
                let birthdate = document.createElement('p');
                let birthplace= document.createElement('p');
        let image = document.createElement('img');

        
//   Output is here VVVVVVVVVVVVVVVV

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        birthdate.textContent = 'Date of Birth: '+ prophets[i].birthdate;
        birthplace.textContent = 'Place of  Birth: ' + prophets[i].birthplace;
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + '-' + i)

        
       


        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(image);
        
                 // where is goes V in div.cards
                 
        document.querySelector('div.cards').appendChild(card);
  }
});
   
   




 