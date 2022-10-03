const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
// const path = require('path');
const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:4200',
        methods: ['GET, POST, OPTIONS, PUT, PATCH, DELETE']
    }
});
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

MongoClient.connect(url, {maxPoolSize:50, useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    if (err) {return console.log(err);}
    const dbName = "chatDB";
    const db = client.db(dbName);
    const PORT = 3000;
    const server = require('./listen.js');
    const sockets = require('./socket.js');
    sockets.connect(io, PORT);

    require('./routes/postLogin.js')(db, app);
    require('./routes/registerUser.js')(db, app);
    require('./routes/getUsers.js')(db, app);
    require('./routes/deleteUser.js')(db, app);
    require('./routes/validateID')(db, app);

    server.listen(http, PORT);
});

module.exports = app