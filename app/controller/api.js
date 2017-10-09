const User = require("../models/users.js"),
    Paste = require("../models/pastes.js");

module.exports = app => {
    app.get("/api/userinfo", (req, res) => {
        if(!req.user) {
            res.status(500).send("Uh oh. Looks like something went wrong.");
        } else {
            userInfo = {
                username: req.user.username,
                pastes: req.user.pastes
            };
            res.json(userInfo)
        }
    });

    app.get("/api/paste/:pasteid", (req, res) => {
        const pasteid = req.params.pasteid;
        Paste.findById(pasteid, (err, doc) => {
            if(err) { console.log(err) }
            if(!doc) { res.status(404).send("Paste not found."); }
            else {
                console.log(doc)
                if(doc.password) {
                    pw_paste = { 
                        id: doc._id,
                        pw: true
                    }
                    console.log(pw_paste);
                    res.json(pw_paste);
                } else {
                    res.json(doc)
                }
            }
        });
    });
    
    app.get("/api/paste/pw/:pasteid", (req, res) => {
        const pasteid = req.params.pasteid;
        Paste.findById(pasteid, (err, doc) => {
            if(err) { console.log(err) }
            if(!Paste.validPassword(req.params.password)) {
                res.json("Password failed.");
            } else {
                doc.password = true;
                res.json(doc);
            }
        });
    });


    app.post("/api/paste", (req, res) => {
        if(!req.user) {
            res.status(500).send("Please login.");
        } else {
            let paste = req.body;
            let new_paste = new Paste();
            new_paste.title = paste.title;
            new_paste.body = paste.body;
            if(paste.password) { new_paste.password = new_paste.generateHash(paste.password); }
            new_paste.save((err, doc) => {
                if(err) { console.log(err) }
                else { res.json(doc._id) }
            });
        }
    });

    app.put("/api/paste/:pasteid", (req, res) => {
        if(!req.user) {
            res.status(500).send("Please login.");
        } else {
            const pasteid = req.params.pasteid;
            Paste.findById(pasteid, (err, doc) => {
                if(doc.user === req.user.username) {
                    if(req.body.password) { doc.generateHash(req.body.password); }
                    if(req.body.title) { doc.title = req.body.title; }
                    if(req.body.body) { doc.body = req.body.body; }
                    doc.save();
                }
            });
        }
    });

    app.delete("/api/paste/:pasteid", (req, res) => {
        if(!req.user) {
            res.status(500).send("Please login.");
        } else {
            const pasteid = req.params.pasteid;
            Paste.findById(pasteid, (err, doc) => {
                if(doc.user === req.user.username) {
                    Paste.findByIdAndRemove(pasteid, (err, doc) => {
                        if(err) { console.log(err); }
                            res.json(doc);
                    });
                }
            });
        }
    });
}
            
