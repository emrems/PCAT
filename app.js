//npm start ile sunucumu başlatıyorum

//request ve response arasındaki herşey middleweardir

const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();

//TEMPLATE ENGİNE
app.set('view engine', 'ejs');

//MİDDLEWEARS
app.use(express.static('public')); //static dosyalar için public klasörü
app.use(express.urlencoded({extended:true}))//nu middlewaere sayesinde rep res döngüsünü sonlandırdık
app.use(express.json())

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

app.post('/photos', (req, res) => {//add.ejs de action kısmında /photos yonlendirmesi yapmıştım şimdi onları yakalıyorum
  console.log(req.body);//istek attığımız verileri consolda gösterir
  res.redirect('/')//tekrar ana sayfaya yönlendirdi
});


const port = 3000;
app.listen(port, () => {
  console.log(`server ${port} portunda çalışmmaya başladı`);
});
