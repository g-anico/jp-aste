
const path = require("path");

module.exports = app => {
    app.get("/", (req, res) => {
        if(!req.user) {
            res.redirect("/login");
        } else {
            res.sendFile(path.join(__dirname + "/../../public/index.html"));
        }
    });

    app.get("/login", (req, res) => {
        if(req.user) {
            res.redirect("/");
        } else {
            res.sendFile(path.join(__dirname + "/../../public/login.html"));
        }
    });

    app.get("/register", (req, res) => {
        if(req.user) {
            res.redirect("/");
        } else {
            res.send("");

            res.sendFile(path.join(__dirname + "/../../public/register.html"));
        }
    });

    app.get("/paste/:pasteid", (req, res) => {
        const pasteid = req.params.pasteid;

        res.sendFile(path.join(__dirname + "/../../views/paste.html"));
    });
}
