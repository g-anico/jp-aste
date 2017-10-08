module.exports => {
    app.get("/", (req, res) => {
        if(!req.user) {
            res.redirect("/login");
        } else {
            res.send("");
        }
    });

    app.get("/login", (req, res) => {
        if(req.user) {
            res.redirect("/");
        } else {
            res.send("");
        }
    });

    app.get("/register", (req, res) => {
        if(req.user) {
            res.redirect("/");
        } else {
            res.send("");
        }
    });
}
