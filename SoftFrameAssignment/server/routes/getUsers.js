var fs = require('fs');

module.exports = function(db, app) {
    app.get('/users', function(req, res) {
        const collection = db.collection('userInfo');
        collection.find({}).toArray((err, data)=>{
            if (err) throw err;
            res.send(data);
        });
        // fs.readFile('./data/userInfo.json', 'utf8', function(err, data) {
        //     if (err) throw err;
        //     let users = JSON.parse(data);
        //     // console.log(users);
        //     res.send(users);
        // });
    });
}