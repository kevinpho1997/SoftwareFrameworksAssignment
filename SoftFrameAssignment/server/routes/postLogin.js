var fs = require('fs');

module.exports = function(req, res) {
    var uname = req.body.username;
    var pword = req.body.pwd;
    console.log(uname);
    console.log(pword);
    fs.readFile('./data/users.json', 'utf8', function(err, data){
        if (err) throw err;
        let userArray = JSON.parse(data);
        console.log(userArray);
        let i = userArray.findIndex(user =>
            ((user.username == uname) && (user.password == pword))
        );
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
}