const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, (err, db)=>{
  if(err) throw err;
  var col = db.collection('prices');
  col.aggregate([{
    $match: {
      size: process.argv[2]
    }
  }, {
    $group: {
      _id: 'total',
      total: {
        $avg: '$price'
      }
    }
  }]).toArray((err, r)=>{
    if(err) throw err;
    if(!r.length) throw new Error("No results found");
    var o = r[0];
    console.log(Number(o.total).toFixed(2));
    db.close();
  })
})
