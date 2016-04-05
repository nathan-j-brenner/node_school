const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';
var db = process.argv[2];
mongo.connect(url, (err, db)=>{
  var collection = db.collection('users');
  collection.update({
    username: "tinatime",
  }, {
    $set: {
      age: 40
    }
  }, (err, data)=>{
    if(err) throw err;
    db.close();
  })
})
