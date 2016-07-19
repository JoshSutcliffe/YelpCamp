var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var campgrounds = [
  {name: "Salmon Creek", image: "https://www.coolcamping.co.uk/system/images/369/great-langdale-national-trust-campsite-large.jpg"},
  {name: "Granite Hill", image: "https://www.rockclimbingstore.co.uk/wp-content/upLoads/2015/04/campsite.jpg"},
  {name: "Mountain Goat", image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Gallanach_Campsite_-_geograph.org.uk_-_36570.jpg"}
]

mongoose.connect("mongodb://localhost/yelp_camp");
// Schema Setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

// Model
var Campground = mongoose.model("Campground", campgroundSchema);

// Adding data
Campground.create(
  {
    name: "Salmon Creek",
    image: "http://www.theaa.com/resources/images/news/aa-campsite-of-the-year.jpg",
    description: "Cracking campsite this"
  }, function(err, campground) {
  if (err) {
    console.log(err);
  } else {
    console.log("Created campground");
    console.log(campground);
  }
})

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  // Below is passing in the old array
  // res.render("campgrounds",{campgrounds:campgrounds});
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds", {campgrounds: allCampgrounds});
    };
  });
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  // campgrounds.push(newCampground);
  // Create a new campground and save
  Campground.create(newCampground, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  })
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new");
});

app.get("/campgrounds/:id", function(req, res) {
  res.send("the show page");
});

app.listen(3000, function() {
  console.log("server going");
})
