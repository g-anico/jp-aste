const passport = require("passport"),
    LocalStrategy = require("passport-local").Strategy,
    mongoose = require("mongoose"),
    User = require("../models/users.js");
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
        email = email.toLowerCase();
        User.findOne({ "email": email }, (err, user) => {
            if(err) { return done(err) }
            if(user) {
                return done(null, false);
            } else {
                const newUser = new User();
                newUser.email = email;
                newUser.password = newUser.generateHash(password);

                newUser.save(err => {
                    if(err) { throw err }
                    return done(null, newUser);
                });
            }
        });
    });
);

passport.use("local-login", new LocalStrategy(
    { passReqToCallBack: true },
    function(req, username, password, done) {
        email = email.toLowerCase();
        User.findOne({ "username": username }, (err, user) => {
            if(err) { throw err }
            if(!user) {
                return done(null, false);
            } else if(!User.validPassword(password)) {
                return done(null, false);
            }

            return done(null, user);
        });
    });
);

module.exports = passport;

