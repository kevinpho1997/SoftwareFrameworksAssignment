var fs = require('fs');

module.exports = function(app) {
    app.post('/user/delete', function(req, res){
        // console.log(req.body);
        var uID = req.body.userId;
        // console.log(uID);
        fs.readFile('./data/userInfo.json', 'utf8', function(err, data) {
            if (err) throw err;
            let userInfo = JSON.parse(data);
            userToDel = userInfo.findIndex(user => (user.userid == uID));
            // console.log(`user with ID ${uID}:`, userToDel);
            if (userToDel == -1) {
                console.log("user does not exist");
            } else {
                userInfo.splice(userToDel, 1);
                fs.writeFile('./data/userInfo.json', userInfo, 'utf8', function(err){
                    if (err) throw err;
                });
                // delete user from user.json (login data)
                
            }
        });
    });
}