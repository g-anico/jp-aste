module.exports = app => {
    app.get("/api/userinfo", (req, res) => {
        if(!req.user) {
            res.status(500).send("Uh oh. Looks like something went wrong.");
        } else {
            userInfo = {
                username: req.user.username
                pastes: req.user.pastes
            };
            res.json(userInfo)
        }
    });

    app.get("/api/paste", (req, res) => {
        if(!req.user) {
            res.status(500).send("Please login.");
        } else {
            // TODO: Grab paste from DB
        }
    });

    app.post("/api/paste", (req, res) => {
        if(!req.user) {
            res.status(500).send("Please login.");
        } else {
            // TODO: save paste into Mongo
        }
    });

    app.put("/api/paste", (req, res) => {
        if(!req.user) {
            res.status(500).send("Please login.");
        } else {
            // TODO: update pastes
        }
    });

    app.delete("/api/paste", (req, res) => {
        if(!req.user) {
            res.status(500).send("Please login.");
        } else {
            // TODO: delete pastes
        }
    });
}
            
