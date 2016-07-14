var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  var campgrounds = [
    {name: "Salmon Creek", image: "https://www.coolcamping.co.uk/system/images/369/great-langdale-national-trust-campsite-large.jpg"},
    {name: "Granite Hill", image: "https://www.rockclimbingstore.co.uk/wp-content/upLoads/2015/04/campsite.jpg"},
    {name: "Mountain Goat", image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Gallanach_Campsite_-_geograph.org.uk_-_36570.jpg"}
  ]

  res.render("campgrounds",{campgrounds:campgrounds});
});

app.listen(3000, function() {
  console.log("server going");
})
