const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    session = require("express-session"),
    mongoose = require("mongoose"),
    PORT = process.env.PORT || 8080,
    mongoUrl = process.env.MONGO_URI || "mongodb://localhost:27017/jpaste";

// Body-parser stuff.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Passport & Sessions
app.use(session({ secret: "lolcat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Connect Mongoose
mongoose.connect(mongourl, { useMongoClient: true });

// Routes
require("./app/controller/authentication.js")(app);
// require("./app/controller/html.js")(app);

// Start Server
app.listen(PORT);

