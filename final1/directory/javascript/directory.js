const requestURL = '';



fetch(requestURL)
  .then(function(response){
    return response.json();
  })
  .then(function (jsonObject) {
    //   console.table(jsonObject);
      
      const directory = jsonObject['directory'];


// For loop for cycling through each profile
    for (let i = 0; i < directory.length; i++ ) {

          //   Creating the element is here VVVVVVVVVVVVVVVV
        let card = document.createElement('section');
            let h2 = document.createElement('h2');
                let phone = document.createElement('p');
                let address= document.createElement('p');
        let image = document.createElement('img');

        
//   Output is here VVVVVVVVVVVVVVVV

        h2.textContent = directory[i].name;
        phone.textContent = 'Phone: '+ directory[i].phone;
        address.textContent = 'Address: ' + directory[i].address;
        image.setAttribute('src', directory[i].imageurl);
        image.setAttribute('alt', directory[i].name + 'Logo ')

        
       


        card.appendChild(h2);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(image);
        
                 // where is goes V in div.cards
                 
        document.querySelector('div.cards').appendChild(card);
  }
});
   
   




 