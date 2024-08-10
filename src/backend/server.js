const express = require('express');
const cors = require('cors');
const server = express();
const port = 3000;

const sides = require('./sides051124.json');

server.use(cors());

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

server.post('/api/sides', (req, res) => {
  const newSide = req.body;
  sides.push(newSide);
  res.status(201).json(newSide);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});