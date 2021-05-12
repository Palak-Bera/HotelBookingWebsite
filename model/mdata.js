var mongoose = require('mongoose');

var contactusSchema =  new mongoose.Schema({
    name: String,
    email : String,
    Phonenumber : Number,
    message : String,
    datetime : Date,
});

var contactusModel = mongoose.model('contectus',contactusSchema);

module.exports = contactusModel;
