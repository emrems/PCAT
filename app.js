//request ve response arasındaki herşey middleweardir

const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();

//TEMPLATE ENGİNE
app.set('view engine', 'ejs');

//MİDDLEWEARS
app.use(express.static('public')); //static dosyalar için public klasörü

//ROUTES
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});


app.get('/add', (req, res) => {
  res.render('add');
});


const port = 3000;
app.listen(port, () => {
  console.log(`server ${port} portunda çalışmmaya başladı`);
});
