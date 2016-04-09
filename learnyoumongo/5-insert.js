const mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var firstName = process.argv[2];
var lastName = process.argv[3];
var doc = {
  firstName: firstName,
  lastName: lastName
}
mongo.connect(url, (err, db)=>{
  if(err) throw err;
  var docs = db.collection('docs');
  docs.insert(doc, (err, data)=>{
    if(err) throw err;
    console.log(JSON.stringify(doc));
    db.close();
  });
});
