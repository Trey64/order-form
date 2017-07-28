'use strict';

Customer.all = [];

function render() {
  var ulEl = document.getElementById('ul');

  for(var i = 0; i < Customer.all.length; i++) {

    var liEl = document.createElement('li');
    liEl.textContent = 'You are about to order 'Customer.all[i].amount + ' of the ' + Customer.all[i].prod ' product(s).';
    ulEl.appendChild(liEl);
    liEl.textContent = 'Name: ' + Customer.all[i].name;
    ulEl.appendChild(liEl);
    liEl.textContent = 'Street: ' + Customer.all[i].st;
    ulEl.appendChild(liEl);
    liEl.textContent = 'City: ' + Customer.all[i].city;
    ulEl.appendChild(liEl);
    liEl.textContent = 'Zip Code: ' + Customer.all[i].zip;
    ulEl.appendChild(liEl);
    liEl.textContent = 'State: ' + Customer.all[i].state;
    ulEl.appendChild(liEl);
    liEl.textContent = 'Phone Number: ' + Customer.all[i].phone;
    ulEl.appendChild(liEl);
    liEl.textContent = 'Credit Card #: ' + Customer.all[i].credit;
    ulEl.appendChild(liEl);
  }
}


if(localStorage.cartItems) {
  console.log('stuff in local storage');
  Customer.all = JSON.parse(localStorage.getItem('cartItems'));
  render();
}

// document.getElementById('delete').addEventListener('click', function(){
//   localStorage.clear();
// });
