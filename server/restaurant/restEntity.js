const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	id :  String ,
	name:String,
  address :String,
	image:String,
	rating :String,
});
const model = mongoose.model('Restaurant', schema);
module.exports = {
	restaurantModel: model
};
