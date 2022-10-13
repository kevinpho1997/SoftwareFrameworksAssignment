
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
        var userCount = collection.countDocuments().then(function(count){
            // console.log('count', count);
            userInfoObj.userid = count + 1;
            // console.log(userInfoObj.userid);
        });
        console.log('userCount', userCount);
        // userInfoObj.userid = userCount;
        // console.log("userInfoObj.userid", userInfoObj.userid);

        collection.find({'username': userInfoObj.username}).count((err, idCount) => {
            // console.log("idCount", idCount);
            if (idCount == 0) {
                // add user if there is no instance of the user in the collection
                collection.insertOne(userInfoObj, (err, dbRes) => {
                    if (err) throw err;
                    // console.log("USER INFO INSERTED",userInfoObj);
                    const collection = db.collection('users');
                    // add user login info
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
        });
    });
}