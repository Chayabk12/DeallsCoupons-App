const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}));
const product = require ('./routes/product.route')
const app = express();
let port = 1234;
app.use('/products', product);
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
