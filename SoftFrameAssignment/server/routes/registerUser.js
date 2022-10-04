
module.exports = function(db, app) {
    app.post('/user/create', function(req, res){
        let userInfoObj = {
            username: req.body.username,
            email: req.body.email,
            userid: req.body.id,
            birthdate: req.body.birthdate,
            role: req.body.role
        }
        // get password as well
        let userObj = {
            username: req.body.username,
            password: "123"
        }

        // const editCollection = db.collection('userInfo');

        const collection = db.collection('userInfo');
        // make user id a value that is not being used
        userInfoObj.userid = collection.count({}) + 1;
        collection.find({'userid': userInfoObj.id}).count((err, idCount) => {
            // console.log("idCount", idCount);
            if (idCount == 0) {
                // add user
                collection.insertOne(userInfoObj, (err, dbRes) => {
                    if (err) throw err;
                    const collection = db.collection('users');
                    collection.insertOne(userObj, (err, dbRes) => {
                        if (err) throw err;
                    })
                });
                // send user data
                collection.find({}).toArray((err, data)=>{
                    if (err) throw err;
                    console.log(data);
                    res.send(data);
                });
            } else {
                res.send({"valid": false});
            }


        })


    });
}