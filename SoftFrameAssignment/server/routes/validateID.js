module.exports = function(db, app) {
    app.post('/validateID', function(req, res){
        if (!req.body) {
            return res.sendStatus(400);
        }
        product = req.body;
        // const collection = db.collection('products');
        // // checks if the id entered already exists and if it has gives the user a suggestion for an ID
        // // sends back the highest ID + 1 by sorting and limiting a .find()
        // collection.find({'id':product.id}).count((err, count) => {
        //     if (count == 0) {
        //         res.send({success:1, topNum:0});
        //     } else {
        //         collection.find({}, {sort: {id: -1}, limit: 1}).toArray(function(err, items){
        //             res.send({success:0, topnum:items[0].id});
        //         });
        //     }
        // });
    })
}