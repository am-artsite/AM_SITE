var Fio = document.getElementById('fio');
var Email = document.getElementById('email');
var Phonenumber = document.getElementById('phonenumber');
var sendform = document.querySelector('.sendform');

var otklik = document.querySelector('.otklik');

sendform.addEventListener('click', result);

function result() {
var infotext = 'Заявка по подписку: ' + ' ' + 'Ф.И.О.: ' + Fio.value + ' ' + 'Email: ' + ' ' + Email.value + ' ' + 'Номер телефона: ' + ' ' + Phonenumber.value;
otklik.textContent = infotext;
}