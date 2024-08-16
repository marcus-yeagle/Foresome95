const express = require('express');
const cors = require('cors');
const path = require('path');

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

server.post('/api/sides', (req, res) => {
  const newSide = req.body;
  sides.push(newSide);
  const timestamp = new Date().toISOString();
  const filePath = path.join(__dirname, `sides_${timestamp}.json`);

  fs.writeFile(filePath, JSON.stringify(sides, null, 2), (err) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: 'An error occurred while saving side' });
    }
    res.status(201).json(newSide);
  });
  res.status(201).json(newSide);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
