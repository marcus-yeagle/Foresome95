const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

const server = express();
const PORT = process.env.PORT || 4000;

const sides = require('./sides051124.json');

const connectionString =
  'mongodb://iad2-c18-2.mongo.objectrocket.com:52167,iad2-c18-0.mongo.objectrocket.com:52167,iad2-c18-1.mongo.objectrocket.com:52167/?replicaSet=9e1499aa02764da499369088784b7d13&ssl=true';

server.use(cors());
server.use(express.static(path.join(__dirname, '../../build')));

server.get('/api/sides', async (req, res) => {
  try {
    const client = await MongoClient.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db('sunday_sides_db');
    const collection = db.collection('sides_collection');

    const elems = await collection.find().toArray();

    res.status(200).json(elems);
    client.close();
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

server.post('/api/sides', async (req, res) => {
  console.log('POST /api/sides');
  const newSide = req.body;

  try {
    const client = await MongoClient.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db('your_database_name_here');
    const collection = db.collection('sides_collection');

    await collection.insertOne(newSide);

    res.status(201).json(newSide);
    client.close();
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
