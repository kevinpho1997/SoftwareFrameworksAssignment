var fs = require('fs');

module.exports = function(db, app) {
    app.get('/users', function(req, res) {
        const collection = db.collection('userInfo');
        // find all users and sent the data back
        collection.find({}).toArray((err, data)=>{
            if (err) throw err;
            res.send(data);
        });
    });
}