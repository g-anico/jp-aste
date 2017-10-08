const passport = require("../config/passport.js");

module.exports = app => {
    // app.post("/login", (req, res, next) => {
    //     passport.authenticate("local-login", (err, user, info) => {
    //         if(err) { return err }
    //         if(!user) { return res.json("failed") }
    //         req.logIn(user, err => {
    //             if(err) { return err }
    //             return res.redirect("/");
    //         });
    //     })(req, res, next);
    // });

    app.post("/login", passport.authenticate("local-login", {
        successRedirect: "/",
        failureRedirect: "/login?login=failed",
    }));

    app.post("/register", passport.authenticate("local-signup", {
        successRedirect: "/",
        failureRedirect: "/register?signup=failed"
    }));

    // app.post("/register", (req, res, next) => {
    //     passport.authenticate("local-signup", (err, user, info) => {
    //         if(err) { return err }
    //         if(!user) { return res.json("failed") }
    //         req.logIn(user, err => {
    //             if(err) { return err }
    //             return res.redirect("/");
    //         });
    //     })(req, res, next);
    // });

    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/login");
    });
}
