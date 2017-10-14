const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    session = require("express-session"),
    mongoose = require("mongoose"),
    PORT = process.env.PORT || 8080,
    passport = require("passport"),
    mongoUrl = process.env.MONGO_URI || "mongodb://localhost:27017/jpaste",
    methodOverride = require("method-override");

// Body-parser stuff.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Method Override.
app.use(methodOverride('_method'));

// Static Files
app.use("/assets", express.static(__dirname + "/public/assets"));

// Passport & Sessions
app.use(session({ secret: "lolcat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Connect Mongoose
mongoose.connect(mongoUrl, { useMongoClient: true });

// Routes
require("./app/controller/authentication.js")(app);
require("./app/controller/html.js")(app);
require("./app/controller/api.js")(app);

// Start Server
app.listen(PORT);

