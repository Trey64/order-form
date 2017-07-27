'use strict';


// index.html stuff
function Customer(name, street, city, state, zip, phone, card) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  this.card = card;
  Customer.all.push(this);
  writable: true;
}

Customer.all = [];
Customer.name = document.getElementById('name');
Customer.street = document.getElementById('street');
Customer.city = document.getElementById('city');
Customer.state = document.getElementById('state');
Customer.zip = document.getElementById('zip');
Customer.phone = document.getElementById('phone');
Customer.card = document.getElementById('card');

// for(var i = 0; i < Customer.all.length; i++) {
//   new Customer(Customer.all[i]);
// }


var allProductNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

function showList() {
  var ulEl = document.getElementById('customerInfoList');
  for(var i = 0; i < Image.all.length; i++) {
    // create element
    var liEl = document.createElement('li');
    // give it content
    liEl.textContent = Customer.name
    // append it to DOM
    ulEl.appendChild(liEl);
  }
}

// add to cart handler
function handleSubmit() {
  localStorage.orderData = JSON.stringify(Customer.all);
}

// event listener
document.getElementById('submit').addEventListener('click', function(){
  handleSubmit();
});


// local storage
if(localStorage.orderData) {
  console.log('stuff in local storage');
  Customer.all = JSON.parse(localStorage.orderData);
} else {
  console.log('nothing in local storage');
}


// cart.html stuff

document.getElementById('delete').addEventListener('click', function(){
  localStorage.clear();
});
