var MongoClient = require('mongodb').MongoClient;

// Connect
MongoClient.connect(
  'mongodb://example:example_pass@iad-mongos0.objectrocket.com:12345/example_db?ssl=true',
  function (err, db) {
    if (err) {
      return console.dir(err);
    }
    var example_doc = {
      start: new Date(),
      end: new Date(2015, 9, 28, 14, 17, 23, 0),
      location: 'Texas',
      official_game: false,
      winner: 'Javi',
      players: [
        {
          name: 'Javi',
          decks: ['Dinosaurs', 'Plants'],
          points: 24,
          place: 1,
        },
        {
          name: 'Seth',
          decks: ['Spies', 'Zombies'],
          points: 20,
          place: 2,
        },
        {
          name: 'Dave',
          decks: ['Steampunk', 'Wizard'],
          points: 20,
          place: 2,
        },
        {
          name: 'Castro',
          decks: ['Shapeshifters', 'Ninjas'],
          points: 18,
          place: 4,
        },
      ],
    };
    var collection = db.collection('example_collection');
    collection.insert(example_doc, { w: 1 }, function (err, result) {
      if (err) {
        return console.dir(err);
      } else {
        console.log('Inserted a doc!');
        process.exit();
      }
    });

    collection.findOne({ winner: 'Javi' }, function (err, doc) {
      if (err) {
        return console.dir(err);
      } else {
        console.log(prettyjson.render(doc));
        process.exit();
      }
    });
  }
);
