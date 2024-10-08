const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

const server = express();
server.use(express.json());
const PORT = process.env.PORT || 4000;

const sides = require('./sides051124.json');

const connectionString =
  'mongodb://marcus:j8b7088Q!@iad2-c18-2.mongo.objectrocket.com:52167,iad2-c18-0.mongo.objectrocket.com:52167,iad2-c18-1.mongo.objectrocket.com:52167/sunday_sides_db?replicaSet=9e1499aa02764da499369088784b7d13';
server.use(cors());
server.use(express.static(path.join(__dirname, '../../build')));

server.get('/api/sides', async (req, res) => {
  console.log('GET /api/sides');
  try {
    const client = await MongoClient.connect(connectionString, undefined);
    const db = client.db('sunday_sides_db');
    const collection = db.collection('sides_collection');

    const elems = await collection.find().toArray();
    console.log(elems);
    res.status(200).json(elems);
    client.close();
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

server.post('/api/sides', async (req, res) => {
  console.log('POST /api/sides', req.body);
  const newSide = req.body;

  if (!newSide) {
    return res.status(400).json({ message: 'Invalid request body' });
  }

  try {
    const client = await MongoClient.connect(connectionString, undefined);
    const db = client.db('sunday_sides_db');
    const collection = db.collection('sides_collection');

    // console.log(newSide, { _id: crypto.randomUUID(), ...newSide });
    await collection.insertOne({ _id: crypto.randomUUID(), ...newSide });

    res.status(201).json(newSide);
    client.close();
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

server.get('/api/sides/clear', async (req, res) => {
  console.log('CLEAR /api/sides');
  try {
    const client = await MongoClient.connect(connectionString, undefined);
    const db = client.db('sunday_sides_db');
    const collection = db.collection('sides_collection');

    await collection.deleteMany({}); // Delete all documents

    res.status(200).json({ message: 'All sides cleared' });
    client.close();
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

server.put('/api/sides/:id', async (req, res) => {
  console.log('PUT /api/sides/:id', req.body);
  const sideId = req.params.id;
  const updatedSide = req.body;

  if (!updatedSide) {
    return res.status(400).json({ message: 'Invalid request body' });
  }

  try {
    const client = await MongoClient.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db('sunday_sides_db');
    const collection = db.collection('sides_collection');

    const result = await collection.updateOne(
      { _id: sideId },
      { $set: updatedSide }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Side not found' });
    }

    res.status(200).json({ message: 'Side updated successfully' });
    client.close();
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
