  
  const cart = 0;


fetch('http://127.0.0.1:5500/main.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(element => {
      document.querySelector('.number').innerHTML = element.id;
      document.querySelector('.name-product').innerHTML = element.name;
      document.querySelector('.name-product').innerHTML = element.name;
      document.querySelector('.new-price').innerHTML = element.price;
      document.querySelector('.new-price').innerHTML = element.price;
      currency = element.currency;
    });
    })
  

  .catch(function (error) {
    console.log(error)
  })

 


  
 






