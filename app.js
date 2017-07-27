'use strict';
//
// index.html stuff

Customer.all = [];

function Customer(prod, amount, credit, name, st, city, zip, state, phone) {
  this.prod = prod;
  this.amount = amount;
  this.name = name;
  this.credit = credit;
  this.st = st;
  this.city = city;
  this.zip = zip;
  this.state = state;
  this.phone = phone;
  this.source = 'img/' + this.prod + 'jpg';
  Customer.all.push(this);
}



// var cusName = document.getElementById('name').value;
// var cusStreet = document.getElementById('street').value;
// var cusCity = document.getElementById('city').value;
// var cusState = document.getElementById('state').value;
// var cusZip = document.getElementById('zip').value;
// var cusPhone = document.getElementById('phone').value;
// var cusCard = document.getElementById('card').value;

// var newCustomer = new Customer(cusName, cusStreet, cusCity, cusState, cusZip, cusPhone, cusCard);


// var allProductNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

// function showList() {
  // var ulEl = document.getElementById('customerInfoList');
  // for(var i = 0; i < Image.all.length; i++) {
  //   // create element
  //   var liEl = document.createElement('li');
  //   // give it content
  //   liEl.textContent = Customer.name
  //   // append it to DOM
  //   ulEl.appendChild(liEl);
  // }
// }
var newCustomer;

// // add to cart handler
function handleSubmit(event) {
  event.preventDefault();
  var prod = event.target.chooseProd.value;
  var amount = parseInt(event.target.amount.value);
  var credit = parseInt(event.target.credit.value);
  var name = event.target.name.value;
  var st = event.target.street.value;
  var city = event.target.city.value;
  var zip = parseInt(event.target.zip.value);
  var state = event.target.state.value;
  var phone = parseInt(event.target.phone.value);

  newCustomer = new Customer(prod, amount, credit, name, st, city, zip, state, phone);
  // localStorage.orderData = JSON.stringify(newCustomer);
}


document.getElementById('userInput').addEventListener('submit', handleSubmit);
// local storage
// if(localStorage.orderData) {
//   console.log('stuff in local storage');
//   Customer.all = JSON.parse(localStorage.orderData);
// } else {
//   console.log('nothing in local storage');
// }


// cart.html stuff

// document.getElementById('delete').addEventListener('click', function(){
//   localStorage.clear();
// });
