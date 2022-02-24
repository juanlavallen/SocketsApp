const path = require('path');
const fs = require('fs');

class TicketControl {
    constructor() {
        this.last = 0;
        this.day = new Date().getDate();
        this.tickets = [];
        this.lastfour = [];

        this.init();
    }

    // Metodo para generar el objeto a guardar
    get toJSON() {
        return {
            last: this.last,
            day: this.day,
            tickets: this.tickets,
            lastfour: this.lastfour
        }
    }

    init() {
        const { last, day, tickets, lastfour } = require('../data/data.json');
        if (day === this.day) {
            this.last = last;
            this.tickets = tickets;
            this.lastfour = lastfour;
        } else {
            this.save();
        }
    }

    save() {
        const pathFile = path.join(__dirname, '../data/data.json');
        fs.writeFileSync(pathFile, JSON.stringify(this.toJSON));
    }
}

module.exports = TicketControl;