const TicketControl = require('../models/TicketControl');
const ticketControl = new TicketControl();

const socketController = (socket) => {

    socket.emit('last-ticket', ticketControl.last);

    socket.on('next-ticket', (payload, callback) => {
        const next = ticketControl.next();
        callback(next);
        // Notificando nuevo ticket 

    });

    socket.on('attend-ticket', ({ desktop }, callback) => {
        if (!desktop) {
            return callback({
                ok: false,
                msg: 'El escritorio es obligatorio'
            });
        }

        const ticket = ticketControl.attend(desktop);
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