//require express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var campgrounds = [
    {name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8t9341--AV174FR94sQ4kGlTQAnrah5iYvp-GAwl-hi5QEDigA"},
    {name: "Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_AwJqrTGL6IcA3w205uu9-X5I1BPCsCN4C-y53tREgH63PGrj"},
    {name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwpEGQZCO0xAqvT6EYdp1ji445g1aDWPuOyRgBRo-r36fDVUd"},
    {name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8t9341--AV174FR94sQ4kGlTQAnrah5iYvp-GAwl-hi5QEDigA"},
    {name: "Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1hBvNnpg3oKhgvUapBBmbtW4Dq3oV2PrEGEt1xW_NJlpF5Xlyw"},
    {name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwpEGQZCO0xAqvT6EYdp1ji445g1aDWPuOyRgBRo-r36fDVUd"},
    {name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8t9341--AV174FR94sQ4kGlTQAnrah5iYvp-GAwl-hi5QEDigA"},
    {name: "Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_AwJqrTGL6IcA3w205uu9-X5I1BPCsCN4C-y53tREgH63PGrj"},
    {name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwpEGQZCO0xAqvT6EYdp1ji445g1aDWPuOyRgBRo-r36fDVUd"}
]

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//landing page route
app.get("/", function(req, res) {
    res.render("landing");
});

//campgrounds page route
app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

//adds new campground and redirects to /campgrounds
app.post("/campgrounds", function(req, res) {
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

//shows the form
app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

//catchall page
app.get("*", function(req, res) {
    res.send("THIS PAGE COULD NOT BE FOUND");
});

//make server listen
app.listen(3000, function() {
    console.log("The YelpCamp Server Has Started");
});