const renderDesktop = document.querySelector('h1');
const btnAttend = document.querySelector('button');

const socket = io();

const searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('desktop')) {
    window.location = 'index.html';
    throw new Error('El escritorio es obligatorio');
}

const desktop = searchParams.get('desktop');
renderDesktop.innerText = desktop;

socket.on('connect', () => {
    btnAttend.disabled = false;
});

socket.on('disconnect', () => {
    btnAttend.disabled = true;
});
