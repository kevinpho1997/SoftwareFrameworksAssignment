var fs = require('fs');

module.exports = function(app) {
    app.post('/register_user', function(req, res){
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
            console.log("uArray", uArray);
            console.log("userObj", userObj);
            console.log("userInfoObj", userInfoObj);

            

        });
    });
}