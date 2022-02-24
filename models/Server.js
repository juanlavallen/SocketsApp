const express = require('express');
const http = require('http');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.PORT = process.env.PORT || 5050;
        this.server = http.createServer(this.app);
        this.io = require('socket.io')(this.server);
    }

    middlewares() {
        this.app.use(cors()); // CORS   
        this.app.use(express.static('public')) // Public Directory
    }

    sockets() {

    }

    listen() {
        this.server.listen(this.PORT, () => {
            console.log('Socket Server running!');
        });
    }
}

module.exports = Server;