module.exports = app => {
    app.get("/", (req, res) => {
        if(!req.user) {
            res.redirect("/login");
        } else {
            // TODO: Update with actual page
            res.sendFile("/home/nkim/Desktop/CodeBootCamp/jp-aste/test.html");
        }
    });

    app.get("/login", (req, res) => {
        if(req.user) {
            res.redirect("/");
        } else {
            // TODO: Update with actual page
            res.sendFile("/home/nkim/Desktop/CodeBootCamp/jp-aste/form.html");
        }
    });

    app.get("/register", (req, res) => {
        if(req.user) {
            res.redirect("/");
        } else {
            res.send("");
        }
    });
    
    app.get("/:pasteid", (req, res) => {
        const pasteid = req.params.pasteid;
        // TODO: set up page
    });
}
