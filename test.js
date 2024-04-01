const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect db
mongoose.connect('mongodb://localhost/pcat-test-db');

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('photo', PhotoSchema); //üst tarafta oluşturduğumuz şemayı modele dönüştürdü

//?create a photo
/*
Photo.create({
  title: 'photo1',
  description: 'photo1 descriiption',
});
*/

//?read photo
/*
const readPhoto = async () => {
    try {
      const data = await Photo.find({});
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  
readPhoto();
  */


//?update a photo
/*
const updatePhoto = async () => {
    try {
      const id = "660af9ccdd4b6ef9ac62c385";
      const updatedPhoto = await Photo.findByIdAndUpdate(id, {
        title: "updated photo",
        description: "this is the updated description",
      }, { new: true }); // Yeni belgeyi döndürmek için { new: true } seçeneğini kullanın
      console.log(updatedPhoto);
    } catch (err) {
      console.error(err);
    }
  };
  
  updatePhoto();
  */

  //?delete a photo
  
  const removePhoto = async () => {
    try {
      const id = "660af9ccdd4b6ef9ac62c385";
      await Photo.findByIdAndDelete(id);
      console.log("photo is removed");
    } catch (err) {
      console.error(err);
    }
  };
  
  removePhoto();
  