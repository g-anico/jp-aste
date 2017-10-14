
const path = require("path");

module.exports = app => {
    app.get("/", (req, res) => {
        if(!req.user) {
            res.redirect("/login");
        } else {
            // TODO: Update with actual page
            res.sendFile("/home/nkim/Desktop/CodeBootCamp/jp-aste/test.html");
            res.sendFile(path.join(__dirname + "/../../views/index.html"));
        }
    });

    app.get("/login", (req, res) => {
        if(req.user) {
            res.redirect("/");
        } else {
            // TODO: Update with actual page
            res.sendFile("/home/nkim/Desktop/CodeBootCamp/jp-aste/form.html");
            res.sendFile(path.join(__dirname + "/../../views/login.html"));
        }
    });

    app.get("/register", (req, res) => {
        if(req.user) {
            res.redirect("/");
        } else {
            res.send("");

            res.sendFile(path.join(__dirname + "/../../views/register.html"));
        }
    });

    app.get("/paste/:pasteid", (req, res) => {
        const pasteid = req.params.pasteid;
        // TODO: set up page

        res.sendFile(path.join(__dirname + "/../../views/paste.html"));
    });
}
