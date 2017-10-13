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

<<<<<<< HEAD
=======
// Static Files
app.use("/assets", express.static(__dirname + "/views/assets"));

>>>>>>> bca198683e7e7df972d725d55b4dc0b1419777d2
// Passport & Sessions
app.use(session({ secret: "lolcat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Connect Mongoose
mongoose.connect(mongoUrl, { useMongoClient: true });

// Routes
require("./app/controller/authentication.js")(app);
<<<<<<< HEAD
<<<<<<< HEAD
// require("./app/controller/html.js")(app);

=======
require("./app/controller/html.js")(app);
require("./app/controller/api.js")(app);
>>>>>>> 2860e7a0663b2419bfdff83a13b0d64da0f20bb9
=======
require("./app/controller/html.js")(app);
require("./app/controller/api.js")(app);
>>>>>>> bca198683e7e7df972d725d55b4dc0b1419777d2
// Start Server
app.listen(PORT);

