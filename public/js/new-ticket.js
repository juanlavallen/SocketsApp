const newTicket = document.querySelector('#newTicket');
const generateBtn = document.querySelector('button');

const socket = io();

socket.on('connect', () => {
    console.log(`#### Conectado ####`);
    generateBtn.disabled = false;
});

socket.on('disconnect', () => {
    console.log(`#### Desconectado ####`);
    generateBtn.disabled = true;
});

socket.on('last-ticket', (ticket) => {
    newTicket.textContent = `Ticket ${ticket}`;
})

generateBtn.addEventListener('click', () => {
    socket.emit('next-ticket', null, (ticket) => {
        newTicket.textContent = ticket;
    });
});