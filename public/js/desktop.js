const renderDesktop = document.querySelector('h1');
const btnAttend = document.querySelector('button');
const ticketAttend = document.querySelector('small');
const msgAlert = document.querySelector('.alert');

const socket = io();

const searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('desktop')) {
    window.location = 'index.html';
    throw new Error('El escritorio es obligatorio');
}

const desktop = searchParams.get('desktop');
renderDesktop.innerText = desktop;
msgAlert.style.display = 'none';

socket.on('connect', () => {
    btnAttend.disabled = false;
});

socket.on('disconnect', () => {
    btnAttend.disabled = true;
});

btnAttend.addEventListener('click', () => {
    socket.emit('attend-ticket', { desktop }, ({ ok, msg, ticket }) => {
        if (!ok) {
            ticketAttend.textContent = 'No hay nadie que atender'
            msgAlert.style.display = '';
            return msgAlert.textContent = msg;
        }

        ticketAttend.textContent = `Ticket ${ticket.number}`;
    });
});