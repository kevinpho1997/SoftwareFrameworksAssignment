const { count } = require('console');
var fs = require('fs');

module.exports = function(db, app) {
    app.post('/login', function(req, res){
        if (!req.body) {
            return res.sendStatus(400);
        }
        var uname = req.body.username;
        var pword = req.body.password;
        // console.log("ln 7", uname);
        // console.log("ln 8", pword);
        const collection = db.collection('users');
        collection.find({'username': uname, 'password': pword}).count((err, count) => {
            if (count = 0) {
                res.send({
                    "valid": false
                });
            } else {
                // console.log("match has been found");
                
            }
        })


        // fs.readFile('./data/users.json', 'utf8', function(err, data){
        //     if (err) throw err;
        //     let users = JSON.parse(data);
        //     let i = users.findIndex(user =>
        //         ((user.username == uname) && (user.password == pword))
        //     );
        //     // console.log(i);
        //     if (i == -1) {
        //         res.send({
        //             "valid": false
        //         });
        //     } else {
        //         fs.readFile('./data/userInfo.json', 'utf8', function(err, data){
        //             if (err) throw err;
        //             let userInfoArray = JSON.parse(data);
        //             let i = userInfoArray.findIndex(user =>
        //                 ((user.username == uname))
        //             );
        //             let userData = userInfoArray[i];
        //             userData['valid'] = true;
        //             res.send(userData);
        //         });
        //     }
        // });
    });
    
}