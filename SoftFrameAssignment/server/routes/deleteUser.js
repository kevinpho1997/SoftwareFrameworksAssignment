var fs = require('fs');

module.exports = function(app) {
    app.post('/user/delete', function(req, res){
        // console.log(req.body);
        var uID = req.body.userId;
        // console.log(uID);
        fs.readFile('./data/userInfo.json', 'utf8', function(err, data) {
            if (err) throw err;
            let userInfo = JSON.parse(data);
            // find index of user that is being deleted
            userToDel = userInfo.findIndex(user => (user.userid == uID));
            // find username of user that is being deleted
            userNameToDel = userInfo[userToDel]["username"];
            // console.log(userNameToDel);
            // console.log(`user with ID ${uID}:`, userToDel);
            if (userToDel == -1) {
                console.log("user does not exist");
            } else {
                userInfo.splice(userToDel, 1);
                let userInfoArray = JSON.stringify(userInfo);
                console.log(userInfoArray);
                fs.writeFile('./data/userInfo.json', userInfoArray, 'utf8', function(err){
                    if (err) throw err;
                });
                // // delete user from user.json (login data)
                // fs.readFile('./data/users.json', 'utf8', function(err, data) {
                //     if (err) throw err;
                //     let loginInfo = JSON.parse(data);
                //     userLoginToDel = loginInfo.findIndex(user => (user["username"] == userNameToDel));
                //     loginInfo.splice(userLoginToDel, 1);
                //     let loginInfoJson = JSON.stringify(loginInfo);
                //     fs.writeFile('./data/users.json', loginInfoJson, 'utf8', function(err){
                //         if (err) throw err;
                //     })
                // });
            }
        });
    });
}