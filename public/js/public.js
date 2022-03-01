const ticket1 = document.querySelector('#ticket1');
const ticket2 = document.querySelector('#ticket2');
const ticket3 = document.querySelector('#ticket3');
const ticket4 = document.querySelector('#ticket4');
const desktop1 = document.querySelector('#desktop1');
const desktop2 = document.querySelector('#desktop2');
const desktop3 = document.querySelector('#desktop3');
const desktop4 = document.querySelector('#desktop4');

const socket = io();

socket.on('last-four', (payload) => {

});