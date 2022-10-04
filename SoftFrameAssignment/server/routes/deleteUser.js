var fs = require('fs');

module.exports = function(db, app) {
    app.post('/user/delete', function(req, res){
        // console.log(req.body);
        var uID = req.body.userId;
        // console.log(uID);
        // const collection = db.collection('userInfo');
        const collection = db.collection('userInfo');
        collection.deleteOne({"userid": uID}, (err, docs) => {
            if (err) throw err;
            collection.find({}).toArray((err, data) => {
                if (err) throw err;
                res.send(data);
                collection.find({'userid': uID}).toArray((err, data) => {
                    if (err) throw err;
                    // console.log(data[0].username);
                    let userToDel = data[0].username;
                    const collection = db.collection('users');
                    collection.deleteOne({"username": userToDel}, (err, docs) => {
                        if (err) throw err;
                    });
                });
            });
        });

    
    });
}