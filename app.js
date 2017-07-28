'use strict';

Customer.all = [];
var newCustomer;

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


// // submit handler
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
  localStorage.setItem('cartItems', JSON.stringify(Customer.all));
}


document.getElementById('userInput').addEventListener('submit', handleSubmit);

// local storage
if(localStorage.cartItems) {
  console.log('stuff in local storage');
  Customer.all = JSON.parse(localStorage.getItem('cartItems'));
  localStorage.setItem('cartItems', JSON.stringify(Customer.all));
} else {
  console.log('nothing in local storage');
}
