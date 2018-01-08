const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and model

const DoctorSchema = new Schema({

    name: String,
    Varsity: String
});

const RegisteredDoctors = mongoose.model('RegisteredDoctors', DoctorSchema);

module.exports = MarioChar;