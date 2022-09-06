const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:4200',
        methods: ['GET', 'POST']
    }
});
const sockets = require('./socket.js');
const server = require('./listen.js');
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
sockets.connect(io, PORT);
server.listen(http, PORT);

// app.post('/login', require('./routes/postLogin.js'));
require('./routes/postLogin.js')(app, path);
require('./routes/registerUser')(app, path);
require('./routes/getUsers')(app, path);