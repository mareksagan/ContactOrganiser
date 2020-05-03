var express = require('express');
var router = express.Router();

var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var connectionString = 'mongodb://localhost:27017/'
var collectionName = 'contacts';

router.get('/getall', function(req, res, next) {
    mongo.connect(connectionString, function (err, client) {
        if (err) throw err;
        
        var db = client.db('local');
        db.collection('contacts').find().toArray(function (err, result) {
            if (err) throw err;

            res.json(result);
  })
})
});

router.get('/get/:contactId', function(req, res, next) {
    var contactId = req.params.contactId;
    console.log(contactId);
    mongo.connect(connectionString, function (err, client) {
        if (err) throw err;
        
        var db = client.db('local');
        db.collection('contacts').findOne({'_id': ObjectId(contactId)}, function (err, result) {
            if (err) {
                res.send(err);
            } else if (result == null) {
                res.send(404);
            } else {
                res.json(result);
            }
  })
})
});

router.delete('/delete/:contactId', function(req, res, next) {
    var contactId = req.params.contactId;
    mongo.connect(connectionString, function (err, client) {
        if (err) throw err;
        
        var db = client.db('local');
        db.collection('contacts').remove({'_id': ObjectId(contactId)}, function (err, result) {
            if (err) {
                res.send(err);
            } else if (result == null) {
                res.send(404);
            } else {
                res.json(result);
            }
  })
})
});

router.put('/add', function(req, res, next) {
    var body = req.body;
    mongo.connect(connectionString, function (err, client) {
        if (err) throw err;
        
        var db = client.db('local');
        db.collection('contacts').insertOne(body, function (err, result) {
            if (err) {
                res.send(err);
            } else if (result == null) {
                res.send(400);
            } else {
                res.json(result);
            }
  })
})
});

router.post('/update', function(req, res, next) {
    var body = req.body;
    mongo.connect(connectionString, function (err, client) {
        if (err) throw err;
        
        var db = client.db('local');
        db.collection('contacts').updateOne(body, function (err, result) {
            if (err) {
                res.send(err);
            } else if (result == null) {
                res.send(400);
            } else {
                res.json(result);
            }
  })
})
});

module.exports = router;
