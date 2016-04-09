const mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo';
var age = parseInt(process.argv[2]);

mongo.connect(url, (err, db)=>{
  if(err) throw err;
  var parrots = db.collection('parrots');

  parrots.find({
    age: {
      $gt: age
    }
  }).toArray((err, docs)=>{
    if(err) throw err;
    console.log(docs);
    db.close()
   });
});
