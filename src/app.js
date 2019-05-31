const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const Artist = require('./models/artist');

const app = express();

app.use(json());

app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.post('/artists', (req, res) => {
  const newArtist = new Artist({
    name: req.body.name,
    genre: req.body.genre,
  });
  console.log(newArtist);
  newArtist.save().then(() => {
    res.status(201).send(newArtist);
  }).catch(e => res.send(e));
});

module.exports = app;
