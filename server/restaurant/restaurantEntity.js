const Mongoose = require('mongoose');
 // let mong = new Mongoose();
const schema = Mongoose.Schema({
    Id : String,
    Name: String,
    location: String
});

const model = Mongoose.model('rest', schema);
 module.exports = {
  ResModel: model
}
