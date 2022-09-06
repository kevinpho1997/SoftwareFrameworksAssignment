var fs = require('fs');

module.exports = function(app) {
    app.post('/user/create', function(req, res){
        let userInfoObj = {
            username: req.body.username,
            email: req.body.email,
            id: req.body.id,
            birthdate: req.body.birthdate,
            role: req.body.role
        }
        // get password as well
        let userObj = {
            username: req.body.username,
            password: "1"
        }
        uArray = []

        fs.readFile('./data/userInfo.json', 'utf8', function(err, data) {
            if (err) throw err;
            uArray= JSON.parse(data);
            userIdLength = uArray.length + 1;
            // console.log("uArray", uArray);
            // console.log("userObj", userObj);
            // console.log("userInfoObj", userInfoObj);
            // console.log("uarrayLength", userIdLength);

            let i = uArray.findIndex(user => user.username == userInfoObj.username);
            if (i == -1) {
                userInfoObj.id = userIdLength;
                uArray.push(userInfoObj);
                // writing to userInfo.json
                let uArrayJson = JSON.stringify(uArray);
                fs.writeFile('./data/userInfo.json', uArrayJson, 'utf8', function(err){
                    if (err) throw err;
                });
                // reading users.json
                fs.readFile('./data/users.json', 'utf8', function(err, data){
                    if (err) throw err;
                    let userLoginInfo = JSON.parse(data);
                    userLoginInfo.push(userObj);
                    let usersJson = JSON.stringify(userLoginInfo);
                    // writing to users.json
                    fs.writeFile('./data/users.json', usersJson, 'utf8', function(err){
                        if (err) throw err;
                    });
                })
                // for handling if the user exists or not
                // uArray["exists"] = false;
                let users = uArray[i];
                users["valid"] = true;
                res.send(users);
            } else {
                // res.send(uArray);
                res.send({
                    "valid": false
                })
            }
            // res.send(uArray);
        });
    });
}