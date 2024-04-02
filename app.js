//npm start ile sunucumu başlatıyorum

//request ve response arasındaki herşey middleweardir

const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const ejs = require('ejs');
const Photo = require('./models/photo');
const app = express();

//connect db
mongoose.connect('mongodb://localhost/pcat-test-db')


//TEMPLATE ENGİNE
app.set('view engine', 'ejs');

//MİDDLEWEARS
app.use(express.static('public')); //static dosyalar için public klasörü
app.use(express.urlencoded({extended:true}))//nu middlewaere sayesinde rep res döngüsünü sonlandırdık
app.use(express.json())

//ROUTES
app.get('/', async (req, res) => {
 const photos = await Photo.find({})//tüm fotoları veritabanından al
  res.render('index',{
    photos:photos
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});


app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/photos',async (req, res) => {//add.ejs de action kısmında /photos yonlendirmesi yapmıştım şimdi onları yakalıyorum
  await Photo.create(req.body)
  res.redirect('/')//tekrar ana sayfaya yönlendirdi
});


const port = 3000;
app.listen(port, () => {
  console.log(`server ${port} portunda çalışmmaya başladı`);
});
