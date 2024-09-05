const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CampgroungSchema = new Schema({
    title:String,
    prince: String,
    description:String,
    location:String
});

const Campground = mongoose.model('Campground', CampgroungSchema);

module.exports = Campground;