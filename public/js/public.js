const ticketOne = document.querySelector('#ticket1');
const ticketTwo = document.querySelector('#ticket2');
const ticketThree = document.querySelector('#ticket3');
const ticketFour = document.querySelector('#ticket4');
const desktop1 = document.querySelector('#desktop1');
const desktop2 = document.querySelector('#desktop2');
const desktop3 = document.querySelector('#desktop3');
const desktop4 = document.querySelector('#desktop4');

const socket = io();

socket.on('last-four', (payload) => {
    const [ticket1, ticket2, ticket3, ticket4] = payload;

    ticketOne.textContent = `Ticket ${ticket1.number}`
    desktop1.textContent = ticket1.desktop;

    ticketTwo.textContent = `Ticket ${ticket2.number}`
    desktop2.textContent = ticket3.desktop;

    ticketThree.textContent = `Ticket ${ticket3.number}`
    desktop3.textContent = ticket3.desktop;

    ticketFour.textContent = `Ticket ${ticket4.number}`
    desktop4.textContent = ticket4.desktop;
});