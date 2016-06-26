var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/petApp')

var petSchema = new  mongoose.Schema({
  name: String,
  type: String,
  age: Number,
  img: String
});

var animallist = mongoose.model( 'animallist', petSchema );

app.use( express.static( 'public' ) );

app.listen( 8000, 'localhost', function( req, res ){
  console.log( 'listening on 8000' );
});

app.get( '/', function( req, res ){
  res.sendFile( path.resolve( 'views/index.html' ) );
});

app.post('/addPets', function(req, res){
  console.log("Sending: " + req.body.name);
  console.log("Image URL: " + req.body.img);
  var newAnimal = {
    name: req.body.name,
    type: req.body.type,
    age: req.body.age,
    img: req.body.img
  }

  var newRecord = animallist(newAnimal);
  newRecord.save();
  res.send("Animal Created")
});

app.get('/getPets', function(req, res){
  console.log("Grabbing pet info");
  animallist.find().then(function(data){
    console.log("Sending: " + data);
    res.send(data);
  });
});