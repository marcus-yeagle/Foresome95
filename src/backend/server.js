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
  console.log('POST /api/sides');
  const newSide = req.body;
  const connectonString =
    'mongodb://iad2-c18-2.mongo.objectrocket.com:52167,iad2-c18-0.mongo.objectrocket.com:52167,iad2-c18-1.mongo.objectrocket.com:52167/?replicaSet=9e1499aa02764da499369088784b7d13&ssl=true';

  MongoClient.connect(connectonString, function (err, db) {
    if (db) {
      db.close();
    }
    console.log('foo');
    if (err) {
      console.log('Error: ', err);
    } else {
      console.log('Connected!');
      const collection = db.collection('sides_collection');
      collection.insert(newSide, { w: 1 }, function (err, result) {
        if (err) {
          console.log('Error: ', err);
          res.status(500).json({ message: 'An error occurred saving Side' });
        } else {
          console.log('Added new Side', result);
          res.status(201).json([...sides, newSide]);
        }
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
