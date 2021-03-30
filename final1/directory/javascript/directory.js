const requestURL = 'https://danmaj33.github.io/danreeves.github.io/final1/directory/javascript/directory.json';



fetch(requestURL)
  .then(function(response){
    return response.json();
  })
  .then(function (jsonObject) {
    //   console.table(jsonObject);
      
      const businesses = jsonObject['businesses'];


// For loop for cycling through each profile
    for (let i = 0; i < businesses.length; i++ ) {

          //   Creating the element is here VVVVVVVVVVVVVVVV
        let card = document.createElement('div.row');
        let column = document.createElement('div.column');
        let h2 = document.createElement('h2');
        let phone = document.createElement('p');
        let address= document.createElement('p');
        let image = document.createElement('img');

        
//   Output is here VVVVVVVVVVVVVVVV

        h2.textContent = businesses[i].name;
        phone.textContent = 'Phone: '+ businesses[i].phone;
        address.textContent = 'Address: ' + businesses[i].address;
        image.setAttribute('src', businesses[i].imageurl);
        image.setAttribute('alt', businesses[i].name + 'Logo')

        
       


        card.appendChild(h2);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(image);
        
                 // where is goes V in div.cards
                 
        document.querySelector('div.cards').appendChild(card);
  }
});
   
   




 