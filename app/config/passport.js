const passport = require("passport"),
    LocalStrategy = require("passport-local").Strategy,
    mongoose = require("mongoose"),
    User = require("../models/users.js"),
    hat = require("hat");
mongoose.Promise = Promise;

// Keep authentication state across HTTP requests
passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb){
    cb(null, obj);
});

passport.use("local-signup", new LocalStrategy(
    { usernameField: "username", passwordField: "password", passReqToCallback: true },
    function(req, username, password, done) {
        username = username.toLowerCase().trim();
        User.findOne({ "username": username }, (err, user) => {
            if(err) { return done(err) }
            if(user) {
                return done(null, false);
            }
            let newUser = new User();
            newUser.username = username;
            newUser.password = newUser.generateHash(password);
            newUser.apikey = hat();
            newUser.save(err => {
                if(err) { throw err }
                return done(null, newUser);
            });
        });
    })
);

passport.use("local-login", new LocalStrategy(
    { passReqToCallback: true },
    function(req, username, password, done) {
        username = username.toLowerCase();
        User.findOne({ "username": username }, (err, user) => {
            if(err) { throw err }
            if(!user) {
                return done(null, false);
            } else if(!user.validPassword(password)) {
                return done(null, false);
            }
            return done(null, user);
        });
    })
);

module.exports = passport;
