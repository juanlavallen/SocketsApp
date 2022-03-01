const TicketControl = require('../models/TicketControl');
const ticketControl = new TicketControl();

const socketController = (socket) => {

    socket.emit('last-ticket', ticketControl.last);
    socket.emit('last-four', ticketControl.lastfour);
    socket.emit('tickets-pending', ticketControl.tickets.length);

    socket.on('next-ticket', (payload, callback) => {
        const next = ticketControl.next();
        callback(next);
        socket.broadcast.emit('tickets-pending', ticketControl.tickets.length);
    });

    socket.on('attend-ticket', ({ desktop }, callback) => {
        if (!desktop) {
            return callback({
                ok: false,
                msg: 'El escritorio es obligatorio'
            });
        }

        const ticket = ticketControl.attend(desktop);

        socket.broadcast.emit('last-four', ticketControl.lastfour);
        socket.emit('tickets-pending', ticketControl.tickets.length);
        socket.broadcast.emit('tickets-pending', ticketControl.tickets.length);

        if (!ticket) {
            callback({
                ok: false,
                msg: 'No hay mas tickets pendientes'
            });
        } else {
            callback({
                ok: true,
                ticket
            });
        }
    });
}

module.exports = {
    socketController
}