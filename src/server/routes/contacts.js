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
            if (err) {
                res.send(err);
            } else if (result == null) {
                res.send(400, 'No contacts found');
            } else {
                res.json(result);
            }
        });
    });
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
                res.send(400, 'No contact found');
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
        db.collection('contacts').deleteOne({'_id': ObjectId(contactId)}, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
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
                } else {
                    res.send(result);
                }
        });
    })
});

router.post('/update', function(req, res, next) {
    var body = req.body;
    mongo.connect(connectionString, function (err, client) {
        if (err) throw err;
        
        var db = client.db('local');
        db.collection('contacts').updateOne(
            {'_id': ObjectId(body._id)},
            {$set: {'fname': body.fname, 'lname': body.lname, 'phone': body.phone, 'email': body.email}},
            {upsert: false}
        );
    })
});

module.exports = router;
