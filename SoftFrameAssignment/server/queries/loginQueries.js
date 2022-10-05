db.users.find({})
db.users.deleteMany({})

db.users.insertMany([
    {"username":"super","password":"qwe"},
    {"username":"kevin","password":"123"},
    {"username":"yeji","password":"321"},
    {"username":"dahyun","password":"234"}
])

// USER INFO
db.userInfo.find({})
db.userInfo.deleteMany({})
db.userInfo.insertMany([
    {"username":"super","userid":1,"email":"super@email.com","birthdate":"2021-01-01","userage":30,"role":"super"},
    {"username":"kevin","userid":2,"email":"kevin@email.com","birthdate":"1997-07-18","userage":25,"role":"gAdmin"},
    {"username":"yeji","userid":3,"email":"yeji@email.com","birthdate":"2000-12-22","userage":22,"role":"gAssist"},
    {"username":"dahyun","userid":4,"email":"dahyun@email.com","birthdate":"1998-12-22","userage":24,"role":"default"}
])