//request ve response arasındaki herşey middleweardir

const express = require('express');
const path = require('path')
const app = express();



//MİDDLEWEARS
app.use(express.static('public'))//static dosyalar için public klasörü


//http metodlarını kullanbiliriz
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'temp/index.html'))
})

const port = 3000;
app.listen(port, () => {
  console.log(`server ${port} portunda çalışmmaya başladı`);
});
