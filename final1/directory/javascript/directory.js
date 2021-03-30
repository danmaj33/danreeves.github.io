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
        let card = document.createElement('div');
        card.setAttribute("class","row");
        let column = document.createElement('div');
        column.setAttribute("class","column");
        let h3 = document.createElement('h3');
        let phone = document.createElement('p');
        let address= document.createElement('p');
        let image = document.createElement('img');

        
//   Output is here VVVVVVVVVVVVVVVV

        h3.textContent = businesses[i].name;
        phone.textContent = 'Phone: '+ businesses[i].phone;
        address.textContent = 'Address: ' + businesses[i].address;
        image.setAttribute('src', businesses[i].imageurl);
        image.setAttribute('alt', businesses[i].name + 'Logo')

        
       

        card.appendChild(column);
        column.appendChild(h3);
        column.appendChild(phone);
        column.appendChild(address);
        column.appendChild(image);
        
                 // where is goes V in div.cards
                 
        document.querySelector('div.cards').appendChild(card);
  }
});
   
   




 