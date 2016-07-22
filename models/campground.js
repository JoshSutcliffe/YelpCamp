var mongoose = require("mongoose");

// Schema Setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  // Creating an association with the comments model
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

// Model
module.exports = mongoose.model("Campground", campgroundSchema);
