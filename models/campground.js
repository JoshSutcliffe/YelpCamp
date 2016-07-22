var mongoose = require("mongoose");

// Schema Setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

// Model
module.exports = mongoose.model("Campground", campgroundSchema);
