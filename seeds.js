var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");

var data = [
  {name: "Salmon Creek", image: "https://www.coolcamping.co.uk/system/images/369/great-langdale-national-trust-campsite-large.jpg", description: "blah blah blah"},
  {name: "Granite Hill", image: "https://www.rockclimbingstore.co.uk/wp-content/upLoads/2015/04/campsite.jpg", description: "blah blah blah"},
  {name: "Mountain Goat", image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Gallanach_Campsite_-_geograph.org.uk_-_36570.jpg", description: "blah blah blah"}
];

function seedDB() {
  // Removing the campgrounds
  Campground.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("removed campgrounds");
    // add some campgrounds
    data.forEach(function(seed) {
      Campground.create(seed, function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("added a campground");
          // Create a comment for all seed data
          Comment.create({text: "Great place but no internet", author: "Big Dave"}, function(err, comment) {
            if (err) {
              console.log(err);
            } else {
              data.comments.push(comment);
              campground.save();
              console.log("Comment saved");
            };
          });
        };
      });
    });
  });
};

module.exports = seedDB;
