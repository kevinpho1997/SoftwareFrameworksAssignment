var fs = require('fs');

module.exports = function(app) {
    app.post('/login', function(req, res){
        var uname = req.body.username;
        var pword = req.body.password;
        console.log("ln 7", uname);
        console.log("ln 8", pword);
        fs.readFile('./data/users.json', 'utf8', function(err, data){
            if (err) throw err;
            let users = JSON.parse(data);
            let i = users.findIndex(user =>
                ((user.username == uname) && (user.password == pword))
            );
            console.log(i);
            if (i == -1) {
                res.send({
                    "valid": false
                });
            } else {
                fs.readFile('./data/userInfo.json', 'utf8', function(err, data){
                    if (err) throw err;
                    let userInfoArray = JSON.parse(data);
                    let i = userInfoArray.findIndex(user =>
                        ((user.username == uname))
                    );
                    let userData = userInfoArray[i];
                    userData['valid'] = true;
                    res.send(userData);
                });
            }
        });
    });
    
}