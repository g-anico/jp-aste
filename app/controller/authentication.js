const passport = require("../config/passport.js");

module.exports = app => {
    app.post("/login", (req, res, next) => {
        passport.authenticate("local-login", (err, user, info) => {
            if(err) { return err }
            if(!user) { return res.json("failed") }
            req.logIn(user, err => {
                if(err) { return err }
                return res.redirect("back");
            });
        })(req, res, next);
    });

    app.post("/register", (req, res, next) => {
        passport.authenticate("local-signup", (err, user, info) => {
            if(err) { return err }
            if(!user) { return res.json("failed") }
            req.logIn(user, err => {
                if(err) { return err }
                return res.redirect("back");
            });
        })(req, res, next);
    });

    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    app.get("/", (req, res) => {
        if(req.user) {
            res.json(req.user);
        }
        else {
            res.json("not logged in");
        }
    });
}

