const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

const server = express();
const PORT = process.env.PORT || 4000;

const sides = require('./sides051124.json');

server.use(cors());
server.use(express.static(path.join(__dirname, '../../build')));

server.get('/api/sides', (req, res) => {
  try {
    setTimeout(() => {
      res.send(sides);
    }, 1500);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

server.post('/api/sides', async (req, res) => {
  const newSide = req.body;

  MongoClient.connect(
    'mongodb://iad2-c18-2.mongo.objectrocket.com:52167,iad2-c18-0.mongo.objectrocket.com:52167,iad2-c18-1.mongo.objectrocket.com:52167/?replicaSet=9e1499aa02764da499369088784b7d13&ssl=true',
    function (err, db) {
      if (err) {
        return console.error(err);
      }

      var collection = db.collection('side_collection');
      collection.insert(newSide, { w: 1 }, function (err, result) {
        if (err) {
          return console.error(err);
        } else {
          console.log('Inserted a new side!', newSide);
          process.exit();
        }
      });

      // collection.findOne({ winner: 'Javi' }, function (err, doc) {
      //   if (err) {
      //     return console.error(err);
      //   } else {
      //     console.log(doc);
      //     process.exit();
      //   }
      // });
    }
  );

  const timestamp = new Date().toISOString();
  const filePath = path.join(__dirname, `sides_${timestamp}.json`);

  console.log('filePath:', filePath);
  console.log(newSide, [...sides, newSide]);

  res.status(201).json(newSide);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
