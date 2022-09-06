var fs = require('fs');

module.exports = function(app) {
    app.get('/users', function(req, res) {
        fs.readFile('./data/userInfo.json', 'utf8', function(err, data) {
            if (err) throw err;
            let users = JSON.parse(data);
            // console.log(users);
            res.send(users);
        });
    });
}