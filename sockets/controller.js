const TicketControl = require('../models/TicketControl');
const ticketControl = new TicketControl();

const socketController = (socket) => {
    
    socket.emit('last-ticket', ticketControl.last);

    socket.on('next-ticket', (payload, callback) => {
        const next = ticketControl.next();
        callback(next);
        // Notificando nuevo ticket 

    });
}

module.exports = {
    socketController
}