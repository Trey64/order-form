'use strict';

var orders = [];
var header = ['#','Picture','Product Ordered','Amount','Customer Name','Street','City','Zip','State','Phone','Credit Card'];
var table = document.getElementById('orders');


function render() {
  makeHeader();
  for(var i = 0; i < orders.length; i++) {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = i + 1;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    var imgEl = document.createElement('img');
    imgEl.src = './img/' + orders[i].prod + '.jpg';
    tdEl.appendChild(imgEl);
    trEl.appendChild(tdEl);;

    tdEl = document.createElement('td');
    tdEl.textContent = orders[i].prod;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = orders[i].amount;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = orders[i].name;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = orders[i].st;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = orders[i].city;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = orders[i].zip;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = orders[i].state;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = orders[i].phone;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = orders[i].credit;
    trEl.appendChild(tdEl);

    var butEl = document.createElement('button');
    butEl.textContent = 'Delete This Order';

    butEl.name = i;
    butEl.type = 'submit';
    trEl.appendChild(butEl);
    table.appendChild(trEl);
  }
}

function makeHeader(){
  var trEl = document.createElement('tr');
  for(var i = 0; i < header.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = header[i];
    trEl.appendChild(thEl);
  }
  table.appendChild(trEl);
}


table.addEventListener('click',removeFun);

orders = JSON.parse(localStorage.getItem('cartItems'));

function removeFun(e){
  orders.splice(e.target.name,1);
  table.innerHTML = '';
  render();
  localStorage.setItem('cartItems', JSON.stringify(orders));
}

render();

