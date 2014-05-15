



  var MongoClient = require('mongodb').MongoClient

exports.index = function(req, res){
  res.render('index', { title: 'Laptop Config Site' });
};

exports.save = function(req, res) {

      MongoClient.connect("mongodb://127.0.0.1:27017/laptopDB", function (err, db) {
        var collection = db.collection('data')
        collection.insert(req.body, function (err, doc) {
           console.log(doc);
      });
   });

  res.send("finished");
  
}




exports.list = function (req, res) {
   MongoClient.connect('mongodb://127.0.0.1:27017/laptopDB', function(err, db) {
    if(err) throw err;
    
    var collection = db.collection('data');

    collection.find({}).toArray(function(err, results) {
    
      db.close();
      results = JSON.parse(JSON.stringify(results));
      
      console.log(results); 
      res.render('saved', { title: 'Laptop Config Site', results: results });
    });
    

  });
}

